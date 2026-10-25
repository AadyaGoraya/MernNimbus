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
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-300 mb-1">
          <BarChart3 className="w-4 h-4" />
          <span>Atmospheric Intelligence</span>
        </div>
        <h1 className="heading-fraunces text-2xl sm:text-4xl font-light text-white tracking-wide">
          Your Weather History
        </h1>
        <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
          Aggregated MongoDB analytics calculated from your listening history across global skies.
        </p>
      </div>

      {/* Guest Mode Gate */}
      {!isAuthenticated && (
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border border-amber-400/30 shadow-xl">
          <Activity className="w-10 h-10 text-amber-300 mx-auto mb-3" />
          <h2 className="font-serif text-xl sm:text-2xl font-light text-white mb-2">
            Sign In to View Your Mood History
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-6">
            Log in with your Nimbus account or the demo account to view your live donut aggregation and sky profile.
          </p>
          <button
            onClick={() => promptLogin('view your weather listening insights')}
            className="px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-amber-300 transition-all"
          >
            Sign In Now
          </button>
        </div>
      )}

      {/* Authenticated Insights View */}
      {isAuthenticated && (
        <div className="space-y-6">
          {/* Fun Highlight Banner */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden bg-gradient-to-r from-amber-500/20 via-sky-500/20 to-purple-500/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Primary Mood Affinity</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
                  {stats?.insightLine || 'Analyzing your mood frequency...'}
                </h2>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 shrink-0">
                <Music className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-semibold text-white">
                  {stats?.totalListens || 0} Total Sessions Logged
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Grid: Donut Chart + Breakdown List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Donut Chart Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
              <h3 className="font-serif text-xl font-light text-white mb-2">
                Atmospheric Mood Distribution
              </h3>
              <p className="text-xs text-white/70 mb-6">
                Relative percentage of weather states experienced through your soundscape.
              </p>

              {isLoading ? (
                <div className="h-64 rounded-2xl bg-white/10 animate-pulse" />
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
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth={1}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const d = payload[0].payload;
                            return (
                              <div className="glass-panel p-3 rounded-xl border border-white/25 shadow-xl text-xs text-white">
                                <div className="font-bold capitalize text-amber-300">
                                  {d.mood.replace('-', ' ')}
                                </div>
                                <div>Count: {d.count} sessions</div>
                                <div className="text-sky-300 font-bold">{d.percentage}% of time</div>
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
                    <div className="text-[10px] uppercase tracking-wider text-white/60">
                      Plays
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-xs text-white/60">
                  No mood logs available yet. Search cities on the Sky page to build your chart!
                </div>
              )}
            </div>

            {/* Breakdown Table Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
              <h3 className="font-serif text-xl font-light text-white mb-2">
                Detailed Frequency Logs
              </h3>
              <p className="text-xs text-white/70 mb-5">
                Aggregated by MongoDB $group pipeline with city count metrics.
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
