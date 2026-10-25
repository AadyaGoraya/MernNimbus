import React from 'react';

export function WeatherHeroSkeleton() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="h-4 w-28 bg-white/15 rounded-lg mb-3 skeleton-shimmer" />
          <div className="h-10 w-64 bg-white/20 rounded-xl mb-4 skeleton-shimmer" />
          <div className="h-24 w-44 bg-white/15 rounded-2xl mb-4 skeleton-shimmer" />
          <div className="h-5 w-36 bg-white/15 rounded-lg skeleton-shimmer" />
        </div>
        <div className="w-32 h-32 rounded-3xl bg-white/10 skeleton-shimmer shrink-0" />
      </div>
    </div>
  );
}

export function StatChipsSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="glass-panel rounded-2xl p-4 border border-white/15 h-24 skeleton-shimmer" />
      ))}
    </div>
  );
}

export function HourlyStripSkeleton() {
  return (
    <div className="glass-panel rounded-3xl p-6 border border-white/15 my-6">
      <div className="h-5 w-40 bg-white/15 rounded-lg mb-6 skeleton-shimmer" />
      <div className="flex gap-3 overflow-hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="w-20 h-28 rounded-2xl bg-white/10 shrink-0 skeleton-shimmer" />
        ))}
      </div>
    </div>
  );
}

export function ForecastSkeleton() {
  return (
    <div className="glass-panel rounded-3xl p-6 border border-white/15">
      <div className="h-5 w-40 bg-white/15 rounded-lg mb-4 skeleton-shimmer" />
      <div className="space-y-3">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="h-12 rounded-xl bg-white/10 skeleton-shimmer" />
        ))}
      </div>
    </div>
  );
}

export function PlaylistSkeleton() {
  return (
    <div className="glass-panel rounded-3xl p-6 border border-white/15">
      <div className="h-5 w-44 bg-white/15 rounded-lg mb-3 skeleton-shimmer" />
      <div className="h-4 w-72 bg-white/10 rounded-lg mb-6 skeleton-shimmer" />
      <div className="space-y-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-14 rounded-2xl bg-white/10 skeleton-shimmer" />
        ))}
      </div>
    </div>
  );
}
