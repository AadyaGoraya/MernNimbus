import React from 'react';
import { motion } from 'framer-motion';
import { Music, Shuffle, ExternalLink, Play, Disc } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import { PlaylistSkeleton } from '../common/Skeleton';

export default function MoodPlaylistCard() {
  const {
    playlistData,
    effectiveMood,
    isPlaylistLoading,
    shuffleVibeTrack,
    highlightedTrack,
  } = useWeather();

  if (isPlaylistLoading) {
    return <PlaylistSkeleton />;
  }

  if (!playlistData?.tracks || playlistData.tracks.length === 0) {
    return null;
  }

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/20 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-amber-400/20 text-amber-300">
              <Music className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
              Atmospheric Soundscape
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide">
            {effectiveMood.replace('-', ' ')} Vibe
          </h3>
          <p className="text-xs sm:text-sm text-white/80 italic mt-0.5 font-serif">
            "{playlistData.tagline}"
          </p>
        </div>

        {/* "Shuffle Vibe" Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={shuffleVibeTrack}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold shadow-lg transition-all active:scale-95 shrink-0 self-start sm:self-auto"
        >
          <Shuffle className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
          <span>Shuffle Vibe</span>
        </motion.button>
      </div>

      {/* 8 Curated Tracks List */}
      <div className="space-y-2.5">
        {playlistData.tracks.map((track, index) => {
          const isHighlighted = highlightedTrack === track.id;

          return (
            <motion.div
              key={track.id}
              animate={
                isHighlighted
                  ? {
                      scale: [1, 1.02, 1],
                      boxShadow: '0 0 25px rgba(251, 191, 36, 0.4)',
                    }
                  : {}
              }
              transition={{ duration: 0.4 }}
              className={`flex items-center justify-between gap-3 p-3 rounded-2xl transition-all border ${
                isHighlighted
                  ? 'bg-amber-400/20 border-amber-300/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {/* Track Index + Vinyl disc */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-mono font-bold text-white/40 w-4 text-center">
                  {index + 1}
                </span>

                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all shrink-0 ${
                    isHighlighted
                      ? 'bg-amber-400 text-slate-950 border-amber-300'
                      : 'bg-white/10 text-white/80 border-white/15'
                  }`}
                >
                  <Disc className="w-4 h-4 animate-spin-slow" />
                </div>

                <div className="truncate">
                  <div className="text-xs sm:text-sm font-semibold text-white truncate flex items-center gap-2">
                    <span>{track.title}</span>
                    {isHighlighted && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-400 text-slate-950 font-bold uppercase">
                        Current Vibe
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-white/70 truncate">
                    {track.artist}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Spotify & YouTube */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-mono text-white/50 hidden md:inline mr-1">
                  {track.duration}
                </span>

                {/* Spotify Outbound Link */}
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1DB954]/20 hover:bg-[#1DB954]/35 text-[#1DB954] border border-[#1DB954]/40 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
                  title={`Listen to ${track.title} on Spotify`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span className="hidden xs:inline">Spotify</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>

                {/* YouTube Outbound Link */}
                <a
                  href={track.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#FF0000]/20 hover:bg-[#FF0000]/35 text-[#FF6B6B] border border-[#FF0000]/40 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
                  title={`Watch ${track.title} on YouTube`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span className="hidden xs:inline">YouTube</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
