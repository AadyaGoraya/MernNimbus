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
            className="mb-3 p-3 rounded-2xl glass-panel shadow-2xl border border-white/20 w-64 text-white"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demo Sky Engine</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                aria-label="Close demo mood switcher"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-white/70 mb-2.5">
              Force any of the 8 sky animations for examiner demonstration:
            </p>

            <div className="grid grid-cols-2 gap-1.5">
              {MOODS.map((m) => {
                const isActive = (forcedMood || currentMood) === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMood(m.id)}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-all ${
                      isActive
                        ? 'bg-white/25 text-white shadow-sm border border-white/30'
                        : 'hover:bg-white/10 text-white/80 hover:text-white'
                    }`}
                  >
                    <WeatherIcon mood={m.id} className="w-4 h-4 shrink-0" />
                    <span className="truncate">{m.label}</span>
                  </button>
                );
              })}
            </div>

            {forcedMood && (
              <button
                onClick={onReset}
                className="mt-2.5 w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white/90 transition-all border border-white/10"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Live Sky ({currentMood})</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full glass-panel border border-white/25 shadow-xl text-white text-xs font-semibold hover:border-white/40 transition-all group backdrop-blur-xl"
        style={{
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}
        title="Examiner Mood Demo Switcher"
      >
        <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Demo Sky</span>
        {forcedMood && (
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
