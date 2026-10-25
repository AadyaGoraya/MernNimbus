import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Edit2, Check, Trash2, ArrowUpRight, MapPin } from 'lucide-react';
import api from '../../services/api';
import { useWeather } from '../../context/WeatherContext';
import { useAuth } from '../../context/AuthContext';
import { formatTempNumber } from '../../utils/units';
import { THEME_PALETTES } from '../../utils/themePalettes';
import WeatherIcon from '../common/WeatherIcon';

export default function FavoriteCard({ city, onSelect, onDelete, onUpdateNickname }) {
  const { units } = useAuth();
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(city.nickname || '');

  useEffect(() => {
    let isMounted = true;
    async function loadMiniWeather() {
      try {
        const res = await api.get(`/weather?lat=${city.lat}&lon=${city.lon}`);
        if (isMounted && res.success && res.data) {
          setWeather(res.data);
        }
      } catch (err) {
        console.error('Failed to load mini weather for card:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadMiniWeather();
    return () => {
      isMounted = false;
    };
  }, [city.lat, city.lon]);

  const handleSaveNickname = (e) => {
    e.stopPropagation();
    onUpdateNickname(city._id, nicknameInput);
    setIsEditing(false);
  };

  const currentMood = weather?.mood || 'clear-day';
  const palette = THEME_PALETTES[currentMood] || THEME_PALETTES['clear-day'];
  const curTemp = formatTempNumber(weather?.current?.temperature, units);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(city)}
      className="group relative rounded-3xl p-5 border border-white/20 shadow-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] hover:border-white/40"
      style={{
        background: `linear-gradient(135deg, ${palette.bgFrom}99 0%, ${palette.bgVia}88 50%, ${palette.bgTo}aa 100%)`,
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Top Bar: Location & Actions */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          {/* Nickname or edit input */}
          {isEditing ? (
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                value={nicknameInput}
                onChange={(e) => setNicknameInput(e.target.value)}
                placeholder="Give a nickname..."
                className="px-2 py-1 text-xs rounded-lg bg-black/40 border border-white/30 text-white outline-none w-36"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveNickname(e);
                  if (e.key === 'Escape') setIsEditing(false);
                }}
              />
              <button
                onClick={handleSaveNickname}
                className="p-1 rounded-lg bg-emerald-500/30 hover:bg-emerald-500/50 text-emerald-200"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-amber-300 truncate max-w-[150px]">
                {city.nickname || 'Personal Favorite'}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }}
                className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/10 text-white/60 hover:text-white transition-opacity"
                title="Edit nickname"
              >
                <Edit2 className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* City Name */}
          <h3 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide truncate mt-0.5">
            {city.name}
          </h3>
          <div className="text-[11px] text-white/70 truncate flex items-center gap-1">
            <MapPin className="w-3 h-3 shrink-0" />
            <span>{[city.admin1, city.country].filter(Boolean).join(', ')}</span>
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(city._id);
          }}
          className="p-2 rounded-xl bg-white/10 hover:bg-red-500/30 text-white/70 hover:text-red-200 transition-colors shrink-0"
          title="Remove from favorites"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Middle/Bottom: Weather preview */}
      <div className="flex items-end justify-between mt-6 pt-3 border-t border-white/15">
        <div>
          {isLoading ? (
            <div className="h-9 w-16 bg-white/20 rounded-lg animate-pulse" />
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-light text-white leading-none">
                {curTemp}
              </span>
              <span className="text-sm font-light text-white/70">
                °{units === 'imperial' ? 'F' : 'C'}
              </span>
            </div>
          )}
          <div className="text-[11px] text-white/80 font-medium capitalize mt-1">
            {weather?.current?.description || 'Atmospheric Sky'}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-2xl bg-white/15 border border-white/20 shadow-md">
            <WeatherIcon mood={currentMood} className="w-8 h-8 text-white" />
          </div>
          <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/25 transition-colors text-white">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
