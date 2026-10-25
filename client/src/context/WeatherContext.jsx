import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import api from '../services/api';
import { useAuth } from './AuthContext';
import { applyThemeVariables } from '../utils/themePalettes';

const WeatherContext = createContext(null);

const DEFAULT_CITY = {
  name: 'Bengaluru',
  country: 'India',
  admin1: 'Karnataka',
  lat: 12.9716,
  lon: 77.5946,
  timezone: 'Asia/Kolkata',
};

export function WeatherProvider({ children }) {
  const { isAuthenticated, promptLogin } = useAuth();

  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);
  const [forcedMood, setForcedMood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [highlightedTrack, setHighlightedTrack] = useState(null);

  // Effective mood: forced overrides live forecast
  const effectiveMood = forcedMood || weatherData?.mood || 'clear-day';

  // Apply CSS custom properties whenever effective mood changes
  useEffect(() => {
    applyThemeVariables(effectiveMood);
  }, [effectiveMood]);

  // Fetch playlist for current mood
  const fetchPlaylist = useCallback(async (moodToUse, isDay = true) => {
    setIsPlaylistLoading(true);
    try {
      const res = await api.get(`/playlist?mood=${encodeURIComponent(moodToUse)}&isDay=${isDay ? 1 : 0}`);
      if (res.success && res.data) {
        setPlaylistData(res.data);
      }
    } catch (err) {
      console.error('Failed to fetch playlist for mood:', err);
    } finally {
      setIsPlaylistLoading(false);
    }
  }, []);

  // Fetch weather for a given city object
  const fetchWeatherForCity = useCallback(async (city) => {
    setIsLoading(true);
    setWeatherError(null);

    try {
      const res = await api.get(`/weather?lat=${city.lat}&lon=${city.lon}`);
      if (res.success && res.data) {
        setWeatherData(res.data);
        setCurrentCity(city);

        // Fetch curated mood playlist
        const isDaytime = res.data.current?.isDay ?? true;
        const mood = res.data.mood || 'clear-day';
        fetchPlaylist(mood, isDaytime);

        // Log playlist listening in background (non-blocking)
        api.post('/playlist/log', {
          mood,
          city: city.name,
        }).catch(() => {
          // Silent catch for background metric
        });
      }
    } catch (err) {
      setWeatherError(err.message || 'Unable to retrieve weather forecast.');
      toast.error(err.message || 'Failed to load weather data.');
    } finally {
      setIsLoading(false);
    }
  }, [fetchPlaylist]);

  // Initial load
  useEffect(() => {
    fetchWeatherForCity(DEFAULT_CITY);
  }, [fetchWeatherForCity]);

  // When forcedMood changes, update playlist to match forced vibe
  useEffect(() => {
    if (forcedMood) {
      fetchPlaylist(forcedMood, !forcedMood.includes('night'));
    } else if (weatherData?.mood) {
      fetchPlaylist(weatherData.mood, weatherData.current?.isDay ?? true);
    }
  }, [forcedMood, fetchPlaylist, weatherData]);

  // Load user's favorites from server when authenticated
  const loadFavorites = useCallback(async () => {
    if (!isAuthenticated) {
      setFavorites([]);
      return;
    }
    try {
      const res = await api.get('/favorites');
      if (res.success && res.data) {
        setFavorites(res.data);
      }
    } catch (err) {
      console.error('Failed to load favorites:', err);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  // Check if current city is in favorites
  const isCitySaved = useCallback(
    (lat, lon) => {
      const targetLat = Number(lat).toFixed(2);
      const targetLon = Number(lon).toFixed(2);
      return favorites.some(
        (f) =>
          Number(f.lat).toFixed(2) === targetLat &&
          Number(f.lon).toFixed(2) === targetLon
      );
    },
    [favorites]
  );

  const isCurrentCitySaved = currentCity ? isCitySaved(currentCity.lat, currentCity.lon) : false;

  // Toggle Save current city
  const toggleSaveCurrentCity = async () => {
    if (!isAuthenticated) {
      promptLogin('save cities to your favorites');
      return;
    }

    const savedRecord = favorites.find(
      (f) =>
        Number(f.lat).toFixed(2) === Number(currentCity.lat).toFixed(2) &&
        Number(f.lon).toFixed(2) === Number(currentCity.lon).toFixed(2)
    );

    if (savedRecord) {
      // Remove city with undo toast
      try {
        await api.delete(`/favorites/${savedRecord._id}`);
        setFavorites((prev) => prev.filter((f) => f._id !== savedRecord._id));

        toast(
          (t) => (
            <div className="flex items-center gap-3">
              <span>Removed {currentCity.name} from favorites.</span>
              <button
                onClick={async () => {
                  toast.dismiss(t.id);
                  try {
                    const addRes = await api.post('/favorites', {
                      name: savedRecord.name,
                      country: savedRecord.country,
                      admin1: savedRecord.admin1,
                      lat: savedRecord.lat,
                      lon: savedRecord.lon,
                      timezone: savedRecord.timezone,
                      nickname: savedRecord.nickname,
                    });
                    if (addRes.success) {
                      setFavorites((prev) => [addRes.data, ...prev]);
                      toast.success(`Restored ${savedRecord.name}!`);
                    }
                  } catch (e) {
                    toast.error('Failed to restore city');
                  }
                }}
                className="px-2 py-0.5 rounded bg-amber-400 text-slate-900 font-semibold text-xs hover:bg-amber-300 transition-colors"
              >
                Undo
              </button>
            </div>
          ),
          { duration: 5000 }
        );
      } catch (err) {
        toast.error(err.message || 'Failed to remove city');
      }
    } else {
      // Save city
      try {
        const res = await api.post('/favorites', {
          name: currentCity.name,
          country: currentCity.country,
          admin1: currentCity.admin1 || '',
          lat: currentCity.lat,
          lon: currentCity.lon,
          timezone: currentCity.timezone || 'auto',
          nickname: '',
        });
        if (res.success && res.data) {
          setFavorites((prev) => [res.data, ...prev]);
          toast.success(`${currentCity.name} saved to favorites!`);
        }
      } catch (err) {
        toast.error(err.message || 'Failed to save favorite city');
      }
    }
  };

  // Delete a favorite by ID (from Favorites page) with undo
  const deleteFavoriteById = async (id) => {
    const target = favorites.find((f) => f._id === id);
    if (!target) return;

    try {
      await api.delete(`/favorites/${id}`);
      setFavorites((prev) => prev.filter((f) => f._id !== id));

      toast(
        (t) => (
          <div className="flex items-center gap-3">
            <span>Removed {target.name}</span>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                try {
                  const restoreRes = await api.post('/favorites', {
                    name: target.name,
                    country: target.country,
                    admin1: target.admin1,
                    lat: target.lat,
                    lon: target.lon,
                    timezone: target.timezone,
                    nickname: target.nickname,
                  });
                  if (restoreRes.success) {
                    setFavorites((prev) => [restoreRes.data, ...prev]);
                    toast.success(`Restored ${target.name}!`);
                  }
                } catch {
                  toast.error('Undo failed');
                }
              }}
              className="px-2 py-0.5 rounded bg-amber-400 text-slate-900 font-semibold text-xs hover:bg-amber-300"
            >
              Undo
            </button>
          </div>
        ),
        { duration: 5000 }
      );
    } catch (err) {
      toast.error(err.message || 'Failed to delete favorite');
    }
  };

  // Update nickname
  const updateNickname = async (id, newNickname) => {
    try {
      const res = await api.patch(`/favorites/${id}`, { nickname: newNickname });
      if (res.success && res.data) {
        setFavorites((prev) =>
          prev.map((f) => (f._id === id ? { ...f, nickname: newNickname } : f))
        );
        toast.success('Nickname updated!');
      }
    } catch (err) {
      toast.error(err.message || 'Failed to update nickname');
    }
  };

  // Detect user's current GPS location with Geolocation API
  const detectUserLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser.');
      return;
    }

    const toastId = toast.loading('Detecting your local sky coordinates...');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          // Attempt reverse lookup or display as My Location
          toast.dismiss(toastId);
          toast.success('Location detected!');
          fetchWeatherForCity({
            name: 'My Location',
            country: 'Local',
            admin1: '',
            lat,
            lon,
            timezone: 'auto',
          });
        } catch {
          toast.dismiss(toastId);
          fetchWeatherForCity({
            name: 'My Location',
            country: 'Local',
            admin1: '',
            lat,
            lon,
            timezone: 'auto',
          });
        }
      },
      (error) => {
        toast.dismiss(toastId);
        let msg = 'Could not access your location.';
        if (error.code === error.PERMISSION_DENIED) {
          msg = 'Location access was denied. You can still search for any city!';
        } else if (error.code === error.TIMEOUT) {
          msg = 'Location request timed out. Please try again.';
        }
        toast(msg);
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  // Pick Featured Track
  const shuffleVibeTrack = () => {
    if (!playlistData?.tracks || playlistData.tracks.length === 0) return;
    const randomIndex = Math.floor(Math.random() * playlistData.tracks.length);
    const chosenTrack = playlistData.tracks[randomIndex];
    setHighlightedTrack(chosenTrack.id);

    toast.success(`Selected track: "${chosenTrack.title}" — ${chosenTrack.artist}`);

    // Clear highlight after 4 seconds
    setTimeout(() => {
      setHighlightedTrack(null);
    }, 4000);
  };

  return (
    <WeatherContext.Provider
      value={{
        currentCity,
        weatherData,
        playlistData,
        forcedMood,
        effectiveMood,
        isLoading,
        isPlaylistLoading,
        weatherError,
        favorites,
        isCurrentCitySaved,
        highlightedTrack,
        setForcedMood,
        resetForcedMood: () => setForcedMood(null),
        fetchWeatherForCity,
        detectUserLocation,
        toggleSaveCurrentCity,
        deleteFavoriteById,
        updateNickname,
        refreshFavorites: loadFavorites,
        shuffleVibeTrack,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}
