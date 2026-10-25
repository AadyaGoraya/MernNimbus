import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SplitSquareVertical, Shirt, Droplets, Wind, CloudRain, Check, AlertCircle } from 'lucide-react';
import api from '../services/api';
import { useWeather } from '../context/WeatherContext';
import { useAuth } from '../context/AuthContext';
import { formatTempNumber, formatWindSpeed, formatPrecipitation } from '../utils/units';
import { THEME_PALETTES } from '../utils/themePalettes';
import WeatherIcon from '../components/common/WeatherIcon';

/**
 * Generate a smart "Dress for it" tip based on temperature (Celsius) and atmospheric mood
 */
function getDressTip(celsius, mood = 'clear-day') {
  if (mood === 'thunderstorm') {
    return 'Heavy-duty waterproof shell, waterproof boots, and stay sheltered from lightning.';
  }
  if (mood === 'rain') {
    return 'Waterproof trench coat, sturdy walking boots, and a wind-resistant umbrella.';
  }
  if (mood === 'snow') {
    return 'Down parka, merino wool thermal base layers, knit beanie, and insulated gloves.';
  }
  if (mood === 'fog') {
    return 'Reflective outer layer, cozy knit sweater, and moisture-wicking trousers.';
  }

  // Temperature based tips for clear / cloudy
  if (celsius >= 30) {
    return 'Ultra-light breathable linen, polarized UV sunglasses, and light cotton sneakers.';
  } else if (celsius >= 22) {
    return 'Short sleeves, relaxed cotton chinos, and comfortable sneakers.';
  } else if (celsius >= 15) {
    return 'Light windbreaker, denim jacket, or a breathable pullover over a t-shirt.';
  } else if (celsius >= 8) {
    return 'Wool coat, medium knit sweater, and warm leather shoes.';
  } else {
    return 'Heavy winter jacket, thick scarf, thermal socks, and insulated footwear.';
  }
}

export default function ComparePage() {
  const { favorites } = useWeather();
  const { units, isAuthenticated, promptLogin } = useAuth();

  // Selected city IDs (up to 3)
  const [selectedIds, setSelectedIds] = useState([]);
  const [weatherMap, setWeatherMap] = useState({});
  const [loading, setLoading] = useState(true);

  // Initialize selected IDs with first 2 or 3 favorites
  useEffect(() => {
    if (favorites.length > 0 && selectedIds.length === 0) {
      setSelectedIds(favorites.slice(0, 3).map((f) => f._id));
    }
  }, [favorites, selectedIds.length]);

  // Fetch weather for all selected cities
  useEffect(() => {
    let isMounted = true;
    async function loadSelectedWeather() {
      if (selectedIds.length === 0) {
        setLoading(false);
        return;
      }
      setLoading(true);

      const targets = favorites.filter((f) => selectedIds.includes(f._id));
      const results = {};

      await Promise.all(
        targets.map(async (c) => {
          try {
            const res = await api.get(`/weather?lat=${c.lat}&lon=${c.lon}`);
            if (res.success && res.data) {
              results[c._id] = res.data;
            }
          } catch (err) {
            console.error(`Error loading weather for ${c.name}:`, err);
          }
        })
      );

      if (isMounted) {
        setWeatherMap(results);
        setLoading(false);
      }
    }

    loadSelectedWeather();
    return () => {
      isMounted = false;
    };
  }, [selectedIds, favorites]);

  const toggleSelectCity = (cityId) => {
    if (selectedIds.includes(cityId)) {
      if (selectedIds.length > 2) {
        setSelectedIds(selectedIds.filter((id) => id !== cityId));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, cityId]);
      } else {
        // Replace last item
        setSelectedIds([selectedIds[0], selectedIds[1], cityId]);
      }
    }
  };

  const selectedCities = favorites.filter((f) => selectedIds.includes(f._id));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-300 mb-1">
          <SplitSquareVertical className="w-4 h-4" />
          <span>Atmospheric Comparison</span>
        </div>
        <h1 className="heading-fraunces text-2xl sm:text-4xl font-light text-white tracking-wide">
          Compare Horizons
        </h1>
        <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
          Side-by-side atmospheric inspection. Compare live temperatures, cloud density, and smart wardrobe recommendations across 2 to 3 cities.
        </p>

        {/* City Selector Pills */}
        {isAuthenticated && favorites.length > 0 && (
          <div className="mt-5 pt-4 border-t border-white/10">
            <span className="text-[11px] uppercase tracking-wider text-white/60 font-bold block mb-2.5">
              Select 2 or 3 saved cities to compare ({selectedIds.length}/3 selected):
            </span>
            <div className="flex flex-wrap gap-2">
              {favorites.map((f) => {
                const isSelected = selectedIds.includes(f._id);
                return (
                  <button
                    key={f._id}
                    onClick={() => toggleSelectCity(f._id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{f.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Guest Mode Gate */}
      {!isAuthenticated && (
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border border-amber-400/30 shadow-xl">
          <AlertCircle className="w-10 h-10 text-amber-300 mx-auto mb-3" />
          <h2 className="font-serif text-xl sm:text-2xl font-light text-white mb-2">
            Sign In to Compare Cities
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-6">
            Log in to pick and analyze your personal favorite cities side-by-side.
          </p>
          <button
            onClick={() => promptLogin('compare weather across your saved cities')}
            className="px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-amber-300 transition-all"
          >
            Sign In Now
          </button>
        </div>
      )}

      {/* Not enough favorites warning */}
      {isAuthenticated && favorites.length < 2 && (
        <div className="glass-panel rounded-3xl p-8 text-center border border-white/15">
          <h3 className="font-serif text-xl font-light text-white mb-2">
            Save at least 2 cities to enable comparison
          </h3>
          <p className="text-xs text-white/70 mb-4">
            You currently have {favorites.length} saved city. Add another city from the Sky page to compare them here!
          </p>
        </div>
      )}

      {/* Side-by-Side Comparison Columns */}
      {isAuthenticated && selectedCities.length >= 2 && (
        <div className={`grid grid-cols-1 md:grid-cols-${selectedCities.length} gap-5 sm:gap-6`}>
          {selectedCities.map((city) => {
            const data = weatherMap[city._id];
            const cur = data?.current;
            const mood = data?.mood || 'clear-day';
            const palette = THEME_PALETTES[mood] || THEME_PALETTES['clear-day'];
            const temp = formatTempNumber(cur?.temperature, units);
            const feels = formatTempNumber(cur?.apparentTemperature, units);
            const dressTip = getDressTip(cur?.temperature ?? 20, mood);

            return (
              <motion.div
                key={city._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl relative overflow-hidden flex flex-col justify-between"
                style={{
                  background: `linear-gradient(160deg, ${palette.bgFrom}bb 0%, ${palette.bgVia}99 50%, ${palette.bgTo}dd 100%)`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-amber-300">
                        {city.nickname || 'Atmosphere'}
                      </span>
                      <h2 className="heading-fraunces text-2xl sm:text-3xl font-light text-white mt-0.5">
                        {city.name}
                      </h2>
                      <p className="text-xs text-white/70">
                        {[city.admin1, city.country].filter(Boolean).join(', ')}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white/20 border border-white/25 shadow-md">
                      <WeatherIcon mood={mood} className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Temperature */}
                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-5xl sm:text-6xl font-light text-white leading-none">
                        {temp}
                      </span>
                      <span className="text-2xl font-light text-white/70">
                        °{units === 'imperial' ? 'F' : 'C'}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-white/90 capitalize mt-2">
                      {cur?.description || 'Current Sky'} • Feels like {feels}°
                    </div>
                  </div>

                  {/* Stats comparison strip */}
                  <div className="space-y-2 py-3 border-y border-white/15 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-white/70">
                        <Droplets className="w-3.5 h-3.5 text-sky-300" /> Humidity
                      </span>
                      <span className="font-bold text-white">{cur?.humidity ?? '--'}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-white/70">
                        <Wind className="w-3.5 h-3.5 text-teal-300" /> Wind
                      </span>
                      <span className="font-bold text-white">{formatWindSpeed(cur?.windSpeed, units)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-white/70">
                        <CloudRain className="w-3.5 h-3.5 text-blue-300" /> Rain
                      </span>
                      <span className="font-bold text-white">{formatPrecipitation(cur?.precipitation, units)}</span>
                    </div>
                  </div>
                </div>

                {/* "Dress for it" Wardrobe Tip */}
                <div className="mt-6 pt-4 border-t border-white/15">
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-amber-300 mb-1.5">
                    <Shirt className="w-3.5 h-3.5" />
                    <span>Dress For It</span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-medium bg-black/20 p-3 rounded-2xl border border-white/10">
                    "{dressTip}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </main>
  );
}
