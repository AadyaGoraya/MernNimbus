import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUp, ArrowDown, Sparkles } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import { useAuth } from '../../context/AuthContext';
import { formatTempNumber } from '../../utils/units';
import WeatherIcon from '../common/WeatherIcon';

export default function WeatherHero() {
  const { currentCity, weatherData, effectiveMood } = useWeather();
  const { units } = useAuth();

  const cur = weatherData?.current;
  const rawTemp = cur?.temperature;
  const tempNumber = formatTempNumber(rawTemp, units);

  const rawFeels = cur?.apparentTemperature;
  const feelsLike = formatTempNumber(rawFeels, units);

  // Today's hi / lo from daily forecast
  const todayDaily = weatherData?.daily?.[0];
  const hiTemp = formatTempNumber(todayDaily?.tempMax, units);
  const loTemp = formatTempNumber(todayDaily?.tempMin, units);

  // Calculate local time in the city's timezone
  const localTimeString = useMemo(() => {
    if (!weatherData?.timezone) return '';
    try {
      const now = new Date();
      return new Intl.DateTimeFormat('en-US', {
        timeZone: weatherData.timezone,
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(now);
    } catch {
      return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
  }, [weatherData?.timezone]);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 relative overflow-hidden shadow-2xl">
      {/* Soft background ambient gradient glow */}
      <div
        className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Side: City, Time, Giant Temperature */}
        <div className="space-y-2">
          {/* Local Time & Timezone Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/90 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{localTimeString || 'Local Sky Time'}</span>
            <span className="text-white/40">•</span>
            <span className="text-[11px] text-white/70">{weatherData?.timezone || 'Auto'}</span>
          </div>

          {/* City Name & Country */}
          <h1 className="heading-fraunces text-3xl sm:text-5xl font-light text-white tracking-tight drop-shadow-sm flex items-baseline gap-3 flex-wrap">
            <span>{currentCity?.name}</span>
            <span className="text-sm sm:text-base font-sans text-white/70 font-normal">
              {[currentCity?.admin1, currentCity?.country].filter(Boolean).join(', ')}
            </span>
          </h1>

          {/* GIANT Temperature with Animated Roll */}
          <div className="flex items-baseline gap-1 py-1">
            <div className="hero-temperature text-white inline-flex overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`${tempNumber}-${units}`}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {tempNumber}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="font-serif text-3xl sm:text-6xl text-white/70 font-light select-none">
              °{units === 'imperial' ? 'F' : 'C'}
            </span>
          </div>

          {/* Condition Details & Hi/Lo */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-medium text-white/90 flex-wrap">
            <span className="px-3 py-1 rounded-xl bg-white/15 border border-white/20 capitalize font-semibold shadow-sm">
              {cur?.description || 'Atmospheric Sky'}
            </span>
            <span className="text-white/75">
              Feels like <strong className="text-white font-bold">{feelsLike}°</strong>
            </span>
            <div className="flex items-center gap-2 text-white/80">
              <span className="inline-flex items-center text-amber-300">
                <ArrowUp className="w-3.5 h-3.5 mr-0.5" /> {hiTemp}°
              </span>
              <span className="inline-flex items-center text-cyan-300">
                <ArrowDown className="w-3.5 h-3.5 mr-0.5" /> {loTemp}°
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Hero Weather Art Icon */}
        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="relative p-6 rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-2xl group hover:scale-105 transition-transform duration-500">
            <WeatherIcon
              mood={effectiveMood}
              className="w-24 h-24 sm:w-32 sm:h-32 text-white drop-shadow-xl"
              strokeWidth={1.5}
            />
            <div className="mt-2 text-center text-xs font-semibold tracking-wider uppercase text-amber-300 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{effectiveMood.replace('-', ' ')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
