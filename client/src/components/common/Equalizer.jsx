import React from 'react';

/**
 * Animated audio visualizer bars for music-first aesthetic
 */
export default function Equalizer({ isPlaying = true, className = 'h-4' }) {
  return (
    <div className={`flex items-end gap-0.5 ${className}`}>
      {[40, 90, 60, 100, 75, 45, 85].map((height, idx) => (
        <span
          key={idx}
          className="w-0.5 rounded-full bg-amber-300 transition-all duration-300"
          style={{
            height: isPlaying ? `${height}%` : '20%',
            animation: isPlaying
              ? `equalizerPulse 1.${2 + (idx % 4)}s ease-in-out infinite alternate`
              : 'none',
            animationDelay: `${idx * 0.15}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes equalizerPulse {
          0% { height: 15%; opacity: 0.5; }
          50% { height: 95%; opacity: 1; }
          100% { height: 35%; opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
