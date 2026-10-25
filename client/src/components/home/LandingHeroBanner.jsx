import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music, Headphones, Flame, Disc3 } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import Equalizer from '../common/Equalizer';

const TRENDING_SKIES = [
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503, timezone: 'Asia/Tokyo', emoji: '🌸' },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278, timezone: 'Europe/London', emoji: '☕' },
  { name: 'Reykjavik', country: 'Iceland', lat: 64.1466, lon: -21.9426, timezone: 'Atlantic/Reykjavik', emoji: '🧊' },
  { name: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lon: 55.2708, timezone: 'Asia/Dubai', emoji: '🌴' },
  { name: 'New York', country: 'United States', lat: 40.7128, lon: -74.0060, timezone: 'America/New_York', emoji: '🗽' },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093, timezone: 'Australia/Sydney', emoji: '🏄' },
];

const VIBE_SHORTCUTS = [
  { id: 'clear-day', label: 'Golden Hour', emoji: '☀️' },
  { id: 'rain', label: 'Rainy Cafe', emoji: '🌧️' },
  { id: 'clear-night', label: '2 AM Drive', emoji: '🌙' },
  { id: 'thunderstorm', label: 'Storm Electric', emoji: '⚡' },
  { id: 'snow', label: 'Winter Chill', emoji: '❄️' },
  { id: 'partly-cloudy', label: 'Breezy Daydream', emoji: '☁️' },
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
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden my-4 bg-gradient-to-br from-white/10 via-black/20 to-white/5">
      {/* Background radial glow */}
      <div
        className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Side: Punchy Headline & Copy */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>The Sky Sets The Aux Cord</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping" />
          </div>

          <h1 className="heading-fraunces text-3xl sm:text-5xl font-light text-white leading-tight tracking-tight">
            Soundtracks Tuned to the Weather.
          </h1>

          <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed max-w-xl">
            Cloudy with a chance of mellow indie. Torrential downpour with cozy lo-fi.
            Pick any city on Earth and watch your screen and mixtape transform with the clouds.
          </p>

          {/* Quick Trending Cities Carousel */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-400" />
              <span>Tap a city:</span>
            </span>
            {TRENDING_SKIES.map((city) => {
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white/90 hover:scale-102'
                  }`}
                >
                  <span>{city.emoji}</span>
                  <span>{city.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: "Now Spinning" Mini Player Card */}
        <div className="lg:w-80 p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col justify-between shrink-0">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-1.5">
              <Disc3 className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
              <span>Sky Mixtape</span>
            </span>
            <Equalizer isPlaying={true} className="h-4" />
          </div>

          <div className="mb-3">
            <div className="text-xs text-white/60 font-medium">Currently Playing Vibe:</div>
            <div className="text-sm sm:text-base font-bold text-white truncate mt-0.5">
              {currentTrack ? `"${currentTrack.title}"` : 'Selecting Track...'}
            </div>
            <div className="text-xs text-amber-300 font-semibold truncate">
              {currentTrack?.artist || effectiveMood.replace('-', ' ')}
            </div>
          </div>

          {/* Quick Mood Shifter Pills */}
          <div className="pt-2.5 border-t border-white/10">
            <span className="text-[10px] text-white/50 uppercase font-bold block mb-1.5">
              Quick Mood Jump:
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {VIBE_SHORTCUTS.slice(0, 6).map((vibe) => (
                <button
                  key={vibe.id}
                  onClick={() => setForcedMood(vibe.id)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-all ${
                    (forcedMood || effectiveMood) === vibe.id
                      ? 'bg-white/30 text-white border border-white/30'
                      : 'bg-white/5 hover:bg-white/15 text-white/70 hover:text-white'
                  }`}
                >
                  <span>{vibe.emoji}</span>
                  <span className="truncate">{vibe.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
