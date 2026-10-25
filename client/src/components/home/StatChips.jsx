import React from 'react';
import { Droplets, Wind, CloudRain, Sunrise } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import { useAuth } from '../../context/AuthContext';
import { formatWindSpeed, formatPrecipitation } from '../../utils/units';

export default function StatChips() {
  const { weatherData } = useWeather();
  const { units } = useAuth();

  const cur = weatherData?.current;
  const todayDaily = weatherData?.daily?.[0];

  const humidity = cur?.humidity !== undefined ? `${cur.humidity}%` : '--';
  const wind = formatWindSpeed(cur?.windSpeed, units);
  const precipitation = formatPrecipitation(cur?.precipitation, units);

  const formatSunTime = (isoString) => {
    if (!isoString) return '--:--';
    try {
      return new Date(isoString).toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
    } catch {
      return '--:--';
    }
  };

  const sunriseTime = formatSunTime(todayDaily?.sunrise);
  const sunsetTime = formatSunTime(todayDaily?.sunset);

  const stats = [
    {
      id: 'humidity',
      label: 'Humidity',
      value: humidity,
      subtext: cur?.humidity > 70 ? 'High moisture level' : cur?.humidity < 35 ? 'Dry conditions' : 'Normal comfort range',
      icon: Droplets,
    },
    {
      id: 'wind',
      label: 'Wind',
      value: wind,
      subtext: cur?.windSpeed > 25 ? 'Moderate to gusty air' : 'Gentle surface air',
      icon: Wind,
    },
    {
      id: 'precipitation',
      label: 'Precipitation',
      value: precipitation,
      subtext: cur?.precipitation > 0 ? 'Active precipitation' : 'No rain recorded',
      icon: CloudRain,
    },
    {
      id: 'solar',
      label: 'Sun Cycle',
      value: sunriseTime,
      subtext: `Sunset at ${sunsetTime}`,
      icon: Sunrise,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/[0.08] relative overflow-hidden transition-all hover:border-white/20"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                {stat.label}
              </span>
              <Icon className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 truncate mt-1">
              {stat.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
}
