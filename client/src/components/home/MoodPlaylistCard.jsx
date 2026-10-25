import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Shuffle, ExternalLink, Play, Pause, Disc, Radio } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import { PlaylistSkeleton } from '../common/Skeleton';
import Equalizer from '../common/Equalizer';

export default function MoodPlaylistCard() {
  const {
    playlistData,
    effectiveMood,
    isPlaylistLoading,
    shuffleVibeTrack,
    highlightedTrack,
  } = useWeather();

  const [playingTrackId, setPlayingTrackId] = useState(null);
  const audioRef = useRef(null);

  // Stop audio if playlist or mood changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlayingTrackId(null);
  }, [effectiveMood]);

  const togglePlayTrack = (track) => {
    if (!track.previewUrl) {
      // Fallback: If no preview audio, open direct song link in new tab
      window.open(track.appleMusicUrl || track.spotifyUrl || track.youtubeUrl, '_blank');
      return;
    }

    if (playingTrackId === track.id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingTrackId(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(track.previewUrl);
    audio.volume = 0.85;
    audioRef.current = audio;
    setPlayingTrackId(track.id);

    audio.play().catch((err) => {
      console.warn('Audio play was prevented or failed:', err);
      setPlayingTrackId(null);
    });

    audio.onended = () => {
      setPlayingTrackId(null);
    };

    audio.onerror = () => {
      setPlayingTrackId(null);
    };
  };

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
            <span className="text-xs uppercase tracking-wider font-bold text-amber-300 flex items-center gap-2">
              <span>Sky Mixtape • 8 Curated Tracks</span>
              <Equalizer isPlaying={Boolean(playingTrackId)} className="h-3" />
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide capitalize">
            {effectiveMood.replace('-', ' ')} Vibe
          </h3>
          <p className="text-xs sm:text-sm text-white/90 italic mt-0.5 font-serif">
            "{playlistData.tagline}"
          </p>
        </div>

        {/* "Shuffle Vibe" Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={shuffleVibeTrack}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold shadow-lg transition-all active:scale-95 shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
          <span>Shuffle Vibe</span>
        </motion.button>
      </div>

      {/* 8 Curated Tracks List */}
      <div className="space-y-3">
        {playlistData.tracks.map((track, index) => {
          const isHighlighted = highlightedTrack === track.id;
          const isPlaying = playingTrackId === track.id;

          return (
            <motion.div
              key={track.id}
              animate={
                isHighlighted || isPlaying
                  ? {
                      scale: [1, 1.015, 1],
                      boxShadow: isPlaying
                        ? '0 0 25px rgba(251, 191, 36, 0.45)'
                        : '0 0 20px rgba(251, 191, 36, 0.3)',
                    }
                  : {}
              }
              transition={{ duration: 0.4 }}
              className={`flex items-center justify-between gap-3 p-3 rounded-2xl transition-all border ${
                isPlaying
                  ? 'bg-amber-400/25 border-amber-300/60 shadow-lg'
                  : isHighlighted
                  ? 'bg-amber-400/20 border-amber-300/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {/* Left Side: Index + Cover Image + Play Overlay + Title/Artist */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-mono font-bold text-white/40 w-4 text-center shrink-0">
                  {index + 1}
                </span>

                {/* Album Cover Art with interactive Play/Pause Overlay */}
                <div
                  onClick={() => togglePlayTrack(track)}
                  className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 shadow-md shrink-0 cursor-pointer group bg-slate-900"
                  title={isPlaying ? 'Pause Preview' : 'Play 30s Preview'}
                >
                  <img
                    src={track.coverUrl}
                    alt={`${track.title} cover`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80';
                    }}
                  />

                  {/* Dark Play Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all ${
                      isPlaying
                        ? 'bg-black/60 opacity-100'
                        : 'bg-black/40 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {isPlaying ? (
                      <div className="flex flex-col items-center justify-center">
                        <Equalizer isPlaying={true} barCount={3} className="h-4" />
                        <Pause className="w-3.5 h-3.5 text-amber-300 mt-0.5 fill-current" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg pl-0.5">
                        <Play className="w-3 h-3 fill-current" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Title & Artist */}
                <div className="truncate">
                  <a
                    href={track.appleMusicUrl || track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition-colors truncate flex items-center gap-2"
                    title={`Open "${track.title}" directly`}
                  >
                    <span className="truncate">{track.title}</span>
                    {isPlaying && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-400 text-slate-950 font-bold uppercase tracking-wider animate-pulse shrink-0">
                        Playing 🎧
                      </span>
                    )}
                    {isHighlighted && !isPlaying && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-400 text-slate-950 font-bold uppercase shrink-0">
                        Current Vibe
                      </span>
                    )}
                  </a>
                  <div className="text-[11px] text-white/70 truncate flex items-center gap-1.5 mt-0.5">
                    <span>{track.artist}</span>
                    <span className="text-white/30">•</span>
                    <span className="font-mono text-white/50">{track.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Play/Pause Preview + Spotify Song + YouTube Song */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* 1-Click In-App Preview Audio Toggle */}
                {track.previewUrl && (
                  <button
                    type="button"
                    onClick={() => togglePlayTrack(track)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-sm ${
                      isPlaying
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-amber-400/30'
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    }`}
                    title={isPlaying ? 'Pause song preview' : 'Play 30s song preview'}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        <span className="hidden sm:inline">Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span className="hidden sm:inline">Preview</span>
                      </>
                    )}
                  </button>
                )}

                {/* Spotify Outbound Link (points directly to Song / Track search) */}
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1DB954]/20 hover:bg-[#1DB954]/35 text-[#1DB954] border border-[#1DB954]/40 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
                  title={`Open "${track.title}" song on Spotify`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span className="hidden xs:inline">Spotify</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>

                {/* YouTube Outbound Link (points directly to Song Video) */}
                <a
                  href={track.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#FF0000]/20 hover:bg-[#FF0000]/35 text-[#FF6B6B] border border-[#FF0000]/40 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
                  title={`Watch "${track.title}" song video on YouTube`}
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
