import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, RotateCcw } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

const MOODS = [
  { id: 'clear-day', label: 'Clear Day' },
  { id: 'clear-night', label: 'Clear Night' },
  { id: 'partly-cloudy', label: 'Partly Cloudy' },
  { id: 'cloudy', label: 'Cloudy' },
  { id: 'rain', label: 'Rain' },
  { id: 'thunderstorm', label: 'Storm' },
  { id: 'snow', label: 'Snow' },
  { id: 'fog', label: 'Fog' },
];

export default function DemoMoodSwitcher({ currentMood, forcedMood, onSelectMood, onReset }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 p-3.5 rounded-2xl glass-panel shadow-2xl border border-white/10 w-64 text-white"
          >
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                <Sparkles className="w-3.5 h-3.5 text-white/80" />
                <span>Atmosphere Engine</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                aria-label="Close atmosphere switcher"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-white/60 mb-3">
              Preview canvas engine & soundtrack across any of the 8 meteorological states:
            </p>

            <div className="grid grid-cols-2 gap-1.5">
              {MOODS.map((m) => {
                const isActive = (forcedMood || currentMood) === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMood(m.id)}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-medium text-left transition-all ${
                      isActive
                        ? 'bg-white/20 text-white shadow-sm border border-white/20'
                        : 'hover:bg-white/5 text-white/70 hover:text-white border border-transparent'
                    }`}
                  >
                    <WeatherIcon mood={m.id} className="w-4 h-4 shrink-0 text-white/90" />
                    <span className="truncate">{m.label}</span>
                  </button>
                );
              })}
            </div>

            {forcedMood && (
              <button
                onClick={onReset}
                className="mt-3 w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-white/90 transition-all border border-white/10"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Live Atmosphere ({currentMood})</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-white/10 shadow-2xl text-white text-xs font-medium hover:border-white/20 hover:bg-white/10 transition-all group backdrop-blur-xl"
        title="Atmosphere Preview Switcher"
      >
        <Sparkles className="w-3.5 h-3.5 text-white/70 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Preview Atmosphere</span>
        {forcedMood && (
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
