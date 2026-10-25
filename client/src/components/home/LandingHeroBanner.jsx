import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Music2 } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import Equalizer from '../common/Equalizer';

const QUICK_CITIES = [
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503, timezone: 'Asia/Tokyo' },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278, timezone: 'Europe/London' },
  { name: 'Reykjavik', country: 'Iceland', lat: 64.1466, lon: -21.9426, timezone: 'Atlantic/Reykjavik' },
  { name: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lon: 55.2708, timezone: 'Asia/Dubai' },
  { name: 'New York', country: 'United States', lat: 40.7128, lon: -74.0060, timezone: 'America/New_York' },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093, timezone: 'Australia/Sydney' },
];

const MOOD_FILTERS = [
  { id: 'clear-day', label: 'Clear' },
  { id: 'rain', label: 'Rain' },
  { id: 'thunderstorm', label: 'Storm' },
  { id: 'snow', label: 'Snow' },
  { id: 'partly-cloudy', label: 'Overcast' },
  { id: 'clear-night', label: 'Night' },
];

export default function LandingHeroBanner() {
  const {
    currentCity,
    fetchWeatherForCity,
    playlistData,
    effectiveMood,
    setForcedMood,
    forcedMood,
  } = useWeather();

  const currentTrack = playlistData?.tracks?.[0];

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/[0.08] relative overflow-hidden my-4 shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        {/* Left: Purposeful Title & City Quick-Select */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] uppercase font-mono tracking-wider text-slate-400 font-semibold">
              Live Atmosphere & Soundtrack Sync
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium mr-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Explore:</span>
            </span>
            {QUICK_CITIES.map((city) => {
              const isActive = currentCity?.name === city.name;
              return (
                <button
                  key={city.name}
                  onClick={() =>
                    fetchWeatherForCity({
                      name: city.name,
                      country: city.country,
                      admin1: '',
                      lat: city.lat,
                      lon: city.lon,
                      timezone: city.timezone,
                    })
                  }
                  className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-slate-950 font-semibold shadow-sm'
                      : 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.05]'
                  }`}
                >
                  {city.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Integrated Audio Now Playing & Atmospheric Mode Override */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:border-l lg:border-white/[0.08] lg:pl-6 shrink-0">
          {/* Track Snippet */}
          {currentTrack && (
            <div className="flex items-center gap-3">
              {currentTrack.coverUrl && (
                <img
                  src={currentTrack.coverUrl}
                  alt={currentTrack.title}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-lg object-cover border border-white/[0.1] shadow"
                />
              )}
              <div className="truncate max-w-[160px]">
                <div className="text-[10px] uppercase font-mono text-slate-400">Atmospheric Lead</div>
                <div className="text-xs font-semibold text-white truncate">{currentTrack.title}</div>
                <div className="text-[11px] text-slate-400 truncate">{currentTrack.artist}</div>
              </div>
            </div>
          )}

          {/* Clean Mood Selector with Live toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            {/* Live Mode Button */}
            <button
              onClick={() => setForcedMood(null)}
              title="Sync with real-time city weather"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                !forcedMood
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${!forcedMood ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
              <span>Live</span>
            </button>

            {MOOD_FILTERS.map((mood) => {
              const isActive = forcedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => setForcedMood(forcedMood === mood.id ? null : mood.id)}
                  title={isActive ? 'Click to return to live weather' : `Preview ${mood.label} atmosphere`}
                  className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    isActive
                      ? 'bg-white text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {mood.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Atmospheric Override Notice Banner */}
      {forcedMood && (
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-amber-300/90 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>
              Atmospheric preview active: <strong className="capitalize">{forcedMood.replace('-', ' ')}</strong> (Overriding live {currentCity?.name} weather)
            </span>
          </div>
          <button
            onClick={() => setForcedMood(null)}
            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] transition-colors border border-white/10"
          >
            Reset to Live Weather
          </button>
        </div>
      )}
    </div>
  );
}
