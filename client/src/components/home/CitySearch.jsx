import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Heart, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../services/api';
import { useWeather } from '../../context/WeatherContext';

export default function CitySearch() {
  const {
    currentCity,
    fetchWeatherForCity,
    detectUserLocation,
    isCurrentCitySaved,
    toggleSaveCurrentCity,
  } = useWeather();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef(null);

  // Debounced search
  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await api.get(`/weather/search?q=${encodeURIComponent(query.trim())}`);
        if (res.success && res.data) {
          setResults(res.data);
          setIsOpen(true);
        }
      } catch (err) {
        console.error('Search failed:', err);
      } finally {
        setIsLoading(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCity = (city) => {
    fetchWeatherForCity({
      name: city.name,
      country: city.country,
      admin1: city.admin1 || '',
      lat: city.lat,
      lon: city.lon,
      timezone: city.timezone || 'auto',
    });
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="w-full flex items-center justify-between gap-2 sm:gap-4 my-4">
      {/* Search Input Box */}
      <div ref={searchContainerRef} className="relative flex-1 max-w-xl">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-4 h-4 text-white/60 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => {
              if (results.length > 0) setIsOpen(true);
            }}
            placeholder="Search any city or vibe (e.g. Kyoto 🌸, Paris 🥐, Honolulu 🌺)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl glass-panel text-white placeholder-white/50 text-xs sm:text-sm font-medium outline-none focus:border-white/40 shadow-lg transition-all"
          />
          {isLoading && (
            <Loader2 className="absolute right-4 w-4 h-4 text-white/60 animate-spin" />
          )}
          {!isLoading && query && (
            <button
              onClick={() => {
                setQuery('');
                setResults([]);
              }}
              className="absolute right-3.5 p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Autocomplete Dropdown */}
        <AnimatePresence>
          {isOpen && results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 mt-2 z-50 glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/20 divide-y divide-white/10 max-h-72 overflow-y-auto"
            >
              {results.map((item) => (
                <button
                  key={`${item.id}-${item.lat}-${item.lon}`}
                  onClick={() => handleSelectCity(item)}
                  className="w-full px-4 py-3 text-left hover:bg-white/15 flex items-center justify-between gap-3 transition-colors text-white group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <MapPin className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform shrink-0" />
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-semibold truncate">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-white/70 truncate">
                        {[item.admin1, item.country].filter(Boolean).join(', ')}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono shrink-0">
                    {item.countryCode || 'LOC'}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Geolocation Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={detectUserLocation}
        className="flex items-center gap-2 px-3.5 sm:px-4 py-3 rounded-2xl glass-panel text-white text-xs sm:text-sm font-semibold shadow-lg hover:border-white/40 transition-all shrink-0"
        title="Use my current GPS location"
      >
        <MapPin className="w-4 h-4 text-amber-300" />
        <span className="hidden sm:inline">My Location</span>
      </motion.button>

      {/* Save / Unsave Favorite Heart */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleSaveCurrentCity}
        className={`p-3 rounded-2xl glass-panel shadow-lg transition-all shrink-0 border ${
          isCurrentCitySaved
            ? 'border-red-400/50 bg-red-500/20 text-red-300'
            : 'border-white/20 text-white/80 hover:text-white hover:border-white/40'
        }`}
        title={isCurrentCitySaved ? 'Saved in favorites (click to remove)' : 'Save city to favorites'}
      >
        <Heart
          className={`w-5 h-5 transition-transform ${
            isCurrentCitySaved ? 'fill-red-400 text-red-400 scale-105' : 'text-white'
          }`}
        />
      </motion.button>
    </div>
  );
}
