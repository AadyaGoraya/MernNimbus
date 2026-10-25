import React from 'react';
import { Calendar } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import { useAuth } from '../../context/AuthContext';
import { formatTempNumber } from '../../utils/units';
import WeatherIcon from '../common/WeatherIcon';

export default function SevenDayForecast() {
  const { weatherData } = useWeather();
  const { units } = useAuth();

  const daily = weatherData?.daily || [];

  if (daily.length === 0) return null;

  // Find week extremes for proportional range bar calculation
  let minWeek = Infinity;
  let maxWeek = -Infinity;

  daily.forEach((d) => {
    if (d.tempMin < minWeek) minWeek = d.tempMin;
    if (d.tempMax > maxWeek) maxWeek = d.tempMax;
  });

  const weekSpan = maxWeek - minWeek || 1;

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/20 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/10 text-amber-300">
            <Calendar className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-light text-white tracking-wide">
            7-Day Weather Outlook 📅
          </h3>
        </div>
        <span className="text-xs text-white/60 font-medium">The Week Ahead</span>
      </div>

      <div className="space-y-2.5">
        {daily.map((day, idx) => {
          const isToday = idx === 0;
          const minFormatted = formatTempNumber(day.tempMin, units);
          const maxFormatted = formatTempNumber(day.tempMax, units);

          // Calculate bar offsets
          const leftPercent = Math.max(0, ((day.tempMin - minWeek) / weekSpan) * 100);
          const widthPercent = Math.max(12, ((day.tempMax - day.tempMin) / weekSpan) * 100);

          return (
            <div
              key={day.date}
              className={`flex items-center justify-between gap-3 p-3 rounded-2xl transition-all ${
                isToday
                  ? 'bg-white/15 border border-white/30 shadow-sm'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              {/* Day Name */}
              <div className="w-20 sm:w-24 shrink-0">
                <div className="text-xs sm:text-sm font-bold text-white">
                  {day.dayOfWeek}
                </div>
                <div className="text-[10px] text-white/60">
                  {new Date(day.date + 'T00:00:00').toLocaleDateString([], {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>

              {/* Weather Icon & Label */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="p-1.5 rounded-xl bg-white/10 shrink-0">
                  <WeatherIcon mood={day.mood} className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium text-white/80 truncate hidden sm:inline">
                  {day.description}
                </span>
              </div>

              {/* Range Bar & Hi/Lo */}
              <div className="flex items-center gap-2.5 shrink-0 w-44 sm:w-56 justify-end">
                <span className="text-xs text-cyan-300 font-semibold w-8 text-right">
                  {minFormatted}°
                </span>

                {/* Relative Temperature Range Bar */}
                <div className="flex-1 h-2 rounded-full bg-black/30 relative overflow-hidden hidden xs:block">
                  <div
                    className="absolute top-0 bottom-0 rounded-full bg-gradient-to-r from-cyan-400 via-amber-300 to-amber-500 shadow-sm"
                    style={{
                      left: `${leftPercent}%`,
                      width: `${Math.min(100 - leftPercent, widthPercent)}%`,
                    }}
                  />
                </div>

                <span className="text-xs text-amber-300 font-bold w-8 text-right">
                  {maxFormatted}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
