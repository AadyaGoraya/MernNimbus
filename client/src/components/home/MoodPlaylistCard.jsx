import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music2, Shuffle, Play, Pause, ExternalLink } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import { PlaylistSkeleton } from '../common/Skeleton';
import Equalizer from '../common/Equalizer';

export default function MoodPlaylistCard() {
  const {
    playlistData,
    effectiveMood,
    forcedMood,
    setForcedMood,
    isPlaylistLoading,
    shuffleVibeTrack,
    highlightedTrack,
  } = useWeather();

  const [playingTrackId, setPlayingTrackId] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlayingTrackId(null);
  }, [effectiveMood]);

  const togglePlayTrack = (track) => {
    if (!track.previewUrl) {
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
    <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/[0.08] relative overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-slate-400">
              Curated Soundtrack · 8 Tracks
            </span>
            {forcedMood && (
              <span className="text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300">
                Preview Mode
              </span>
            )}
            {playingTrackId && <Equalizer isPlaying={true} className="h-3 text-amber-400" />}
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wide capitalize flex items-baseline gap-2">
            <span>{effectiveMood.replace('-', ' ')} Atmosphere</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 italic mt-0.5">
            "{playlistData.tagline}"
          </p>
        </div>

        {/* Shuffle Button */}
        <button
          onClick={shuffleVibeTrack}
          className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-200 text-xs font-medium transition-all active:scale-95 shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5 text-slate-400" />
          <span>Shuffle Track</span>
        </button>
      </div>

      {/* Track List */}
      <div className="space-y-1.5">
        {playlistData.tracks.map((track, index) => {
          const isHighlighted = highlightedTrack === track.id;
          const isPlaying = playingTrackId === track.id;

          return (
            <div
              key={track.id}
              className={`flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl transition-all border ${
                isPlaying
                  ? 'bg-white/[0.08] border-amber-400/40 shadow-md'
                  : isHighlighted
                  ? 'bg-white/[0.06] border-white/20'
                  : 'bg-transparent border-transparent hover:bg-white/[0.04]'
              }`}
            >
              {/* Left Side: Index + Cover + Title/Artist */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-mono text-slate-400 w-4 text-center shrink-0">
                  {index + 1}
                </span>

                {/* Album Cover Art */}
                <div
                  onClick={() => togglePlayTrack(track)}
                  className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/[0.08] shadow-sm shrink-0 cursor-pointer group bg-slate-900"
                  title={isPlaying ? 'Pause' : 'Play preview'}
                >
                  <img
                    src={track.coverUrl}
                    alt={`${track.title} cover`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80';
                    }}
                  />

                  {/* Play Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                      isPlaying
                        ? 'bg-black/60 opacity-100'
                        : 'bg-black/40 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-amber-300 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 text-white fill-current ml-0.5" />
                    )}
                  </div>
                </div>

                {/* Title & Artist */}
                <div className="truncate">
                  <a
                    href={track.appleMusicUrl || track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition-colors truncate block"
                    title={`Open "${track.title}"`}
                  >
                    {track.title}
                  </a>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">
                    {track.artist}
                  </div>
                </div>
              </div>

              {/* Right Side: Preview Button & Direct Service Links */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline mr-1">
                  {track.duration}
                </span>

                {track.previewUrl && (
                  <button
                    type="button"
                    onClick={() => togglePlayTrack(track)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      isPlaying
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-semibold'
                        : 'bg-white/[0.04] hover:bg-white/[0.1] text-slate-200 border-white/[0.06]'
                    }`}
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

                {/* Spotify Link */}
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-emerald-400 border border-white/[0.06] text-xs font-medium transition-all"
                  title="Open on Spotify"
                >
                  Spotify
                </a>

                {/* YouTube Link */}
                <a
                  href={track.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-red-400 border border-white/[0.06] text-xs font-medium transition-all"
                  title="Open on YouTube"
                >
                  YouTube
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
