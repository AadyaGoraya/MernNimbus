import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUp, ArrowDown } from 'lucide-react';
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

  const todayDaily = weatherData?.daily?.[0];
  const hiTemp = formatTempNumber(todayDaily?.tempMax, units);
  const loTemp = formatTempNumber(todayDaily?.tempMin, units);

  const localTimeString = useMemo(() => {
    if (!weatherData?.timezone) return '';
    try {
      const now = new Date();
      return new Intl.DateTimeFormat('en-US', {
        timeZone: weatherData.timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(now);
    } catch {
      return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
  }, [weatherData?.timezone]);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden shadow-2xl">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Side: City, Time, Giant Temperature */}
        <div className="space-y-3">
          {/* Local Time & Timezone Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-slate-300 font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{localTimeString || 'Local Sky Time'}</span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] text-slate-400">{weatherData?.timezone || 'Auto'}</span>
          </div>

          {/* City Name & Country */}
          <h1 className="heading-fraunces text-3xl sm:text-5xl font-light text-white tracking-tight flex items-baseline gap-3 flex-wrap">
            <span>{currentCity?.name}</span>
            <span className="text-sm sm:text-base font-sans text-slate-400 font-normal">
              {[currentCity?.admin1, currentCity?.country].filter(Boolean).join(', ')}
            </span>
          </h1>

          {/* GIANT Temperature with Animated Roll */}
          <div className="flex items-baseline gap-1 py-1">
            <div className="hero-temperature text-white inline-flex overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`${tempNumber}-${units}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {tempNumber}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="font-serif text-3xl sm:text-5xl text-slate-400 font-light select-none">
              °{units === 'imperial' ? 'F' : 'C'}
            </span>
          </div>

          {/* Condition Details & Hi/Lo */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-medium text-slate-300 flex-wrap pt-1">
            <span className="px-3 py-1 rounded-xl bg-white/[0.06] border border-white/[0.08] capitalize font-semibold text-white">
              {cur?.description || 'Atmospheric Sky'}
            </span>

            <span className="text-slate-400">
              Feels like <strong className="text-slate-200">{feelsLike}°</strong>
            </span>

            <div className="flex items-center gap-3 text-slate-400">
              <span className="inline-flex items-center text-slate-300">
                <ArrowUp className="w-3.5 h-3.5 mr-0.5 text-amber-400" /> High {hiTemp}°
              </span>
              <span className="inline-flex items-center text-slate-300">
                <ArrowDown className="w-3.5 h-3.5 mr-0.5 text-sky-400" /> Low {loTemp}°
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Architectural Weather Art Icon */}
        <div className="flex items-center justify-center p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
          <WeatherIcon mood={effectiveMood} className="w-24 h-24 sm:w-32 sm:h-32 text-amber-400" />
        </div>
      </div>
    </div>
  );
}
