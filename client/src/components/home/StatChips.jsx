import React from 'react';
import { Droplets, Wind, CloudRain, Sunrise, Sunset } from 'lucide-react';
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

  // Parse sunrise & sunset
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
      subtext: cur?.humidity > 70 ? 'High moisture' : cur?.humidity < 30 ? 'Dry air' : 'Comfortable',
      icon: Droplets,
      color: 'text-sky-300',
    },
    {
      id: 'wind',
      label: 'Wind Speed',
      value: wind,
      subtext: cur?.windSpeed > 30 ? 'Strong gusts' : 'Gentle breeze',
      icon: Wind,
      color: 'text-teal-300',
    },
    {
      id: 'precipitation',
      label: 'Precipitation',
      value: precipitation,
      subtext: cur?.precipitation > 0 ? 'Active fallout' : 'No rain recorded',
      icon: CloudRain,
      color: 'text-blue-300',
    },
    {
      id: 'solar',
      label: 'Solar Horizon',
      value: `${sunriseTime}`,
      subtext: `Sunset at ${sunsetTime}`,
      icon: Sunrise,
      color: 'text-amber-300',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/15 relative overflow-hidden group hover:border-white/30 transition-all shadow-lg"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-wider text-white/70 font-bold">
                {stat.label}
              </span>
              <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {stat.value}
            </div>
            <div className="text-[11px] text-white/60 truncate mt-0.5">
              {stat.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
}
