import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { BarChart3, Sparkles, Music, Activity, Compass } from 'lucide-react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import WeatherIcon from '../components/common/WeatherIcon';

export default function InsightsPage() {
  const { isAuthenticated, promptLogin } = useAuth();
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      if (!isAuthenticated) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await api.get('/stats/moods');
        if (res.success && res.data) {
          setStats(res.data);
        }
      } catch (err) {
        console.error('Failed to load mood stats:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadStats();
  }, [isAuthenticated]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white/50 mb-1">
          <BarChart3 className="w-4 h-4 text-white/70" />
          <span>Atmospheric Analytics</span>
        </div>
        <h1 className="heading-fraunces text-2xl sm:text-4xl font-light text-white tracking-wide">
          Atmospheric Listening Breakdown
        </h1>
        <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
          Historical breakdown of planetary atmospheres, recurring weather modes, and soundscapes explored.
        </p>
      </div>

      {/* Guest Mode Gate */}
      {!isAuthenticated && (
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-xl">
          <Activity className="w-10 h-10 text-white/60 mx-auto mb-3" />
          <h2 className="font-serif text-xl sm:text-2xl font-light text-white mb-2">
            Sign In for Atmospheric Analytics
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto mb-6">
            Log in to view distribution models, recurring climate profiles, and personalized soundscape history.
          </p>
          <button
            onClick={() => promptLogin('view your weather listening insights')}
            className="px-6 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-white/90 transition-all"
          >
            Sign In
          </button>
        </div>
      )}

      {/* Authenticated Insights View */}
      {isAuthenticated && (
        <div className="space-y-6">
          {/* Highlight Banner */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden bg-white/[0.03]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-white/50 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-white/70" />
                  <span>Dominant Climate Signature</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
                  {stats?.insightLine || 'Analyzing meteorological patterns...'}
                </h2>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                <Music className="w-4 h-4 text-white/70" />
                <span className="text-xs font-medium text-white/90">
                  {stats?.totalListens || 0} Sessions Recorded
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Grid: Donut Chart + Breakdown List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Donut Chart Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <h3 className="font-serif text-xl font-light text-white mb-2">
                Atmospheric Distribution
              </h3>
              <p className="text-xs text-white/60 mb-6">
                Relative percentage of weather conditions experienced across your soundscape sessions.
              </p>

              {isLoading ? (
                <div className="h-64 rounded-2xl bg-white/5 animate-pulse" />
              ) : stats?.breakdown && stats.breakdown.length > 0 ? (
                <div className="h-72 w-full relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stats.breakdown}
                        dataKey="count"
                        nameKey="mood"
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={95}
                        paddingAngle={4}
                      >
                        {stats.breakdown.map((entry) => (
                          <Cell
                            key={entry.mood}
                            fill={entry.color}
                            stroke="rgba(255,255,255,0.15)"
                            strokeWidth={1}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const d = payload[0].payload;
                            return (
                              <div className="glass-panel p-3 rounded-xl border border-white/20 shadow-xl text-xs text-white">
                                <div className="font-semibold capitalize text-white">
                                  {d.mood.replace('-', ' ')}
                                </div>
                                <div className="text-white/60 text-[11px] mt-0.5">Sessions: {d.count}</div>
                                <div className="text-white font-mono font-semibold text-xs mt-1">{d.percentage}% of distribution</div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Center Stat */}
                  <div className="absolute pointer-events-none text-center">
                    <div className="text-2xl font-bold font-serif text-white">
                      {stats.totalListens}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50">
                      Sessions
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-xs text-white/50">
                  No atmospheric telemetry recorded yet. Search cities on the forecast map to build history.
                </div>
              )}
            </div>

            {/* Breakdown Table Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <h3 className="font-serif text-xl font-light text-white mb-2">
                Meteorological Frequency Logs
              </h3>
              <p className="text-xs text-white/60 mb-5">
                Aggregated distribution breakdown across recorded cities and environments.
              </p>

              <div className="space-y-3">
                {stats?.breakdown?.map((item) => (
                  <div
                    key={item.mood}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full shrink-0 shadow-sm"
                        style={{ background: item.color }}
                      />
                      <div className="p-1.5 rounded-xl bg-white/10 shrink-0">
                        <WeatherIcon mood={item.mood} className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold capitalize text-white">
                          {item.mood.replace('-', ' ')}
                        </div>
                        <div className="text-[10px] text-white/60">
                          {item.count} sessions • {item.uniqueCities} {item.uniqueCities === 1 ? 'city' : 'cities'}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-sm sm:text-base font-bold text-amber-300 font-mono">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
