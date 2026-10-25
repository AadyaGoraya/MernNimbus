import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Droplet, TrendingUp } from 'lucide-react';
import { useWeather } from '../../context/WeatherContext';
import { useAuth } from '../../context/AuthContext';
import { formatTempNumber } from '../../utils/units';
import WeatherIcon from '../common/WeatherIcon';

export default function HourlyStrip() {
  const { weatherData } = useWeather();
  const { units } = useAuth();

  const hourly = weatherData?.hourly || [];

  // Prepare data for Recharts area chart
  const chartData = useMemo(() => {
    return hourly.slice(0, 24).map((h) => {
      const tempVal = formatTempNumber(h.temperature, units);
      return {
        hour: h.hour,
        temp: typeof tempVal === 'number' ? tempVal : parseFloat(tempVal) || 0,
        precip: h.precipitationProbability,
        description: h.description,
        mood: h.mood,
      };
    });
  }, [hourly, units]);

  if (hourly.length === 0) return null;

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/20 my-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/10 text-amber-300">
            <TrendingUp className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-light text-white tracking-wide">
            Today's Sky Wave & Hourly Curve 📈
          </h3>
        </div>
        <span className="text-xs text-white/60 font-medium">Next 24 Hours</span>
      </div>

      {/* Horizontally Scrollable 24h Cards */}
      <div className="flex gap-2.5 overflow-x-auto pb-4 pt-1 px-1 -mx-1 scrollbar-thin">
        {hourly.slice(0, 24).map((item, idx) => {
          const temp = formatTempNumber(item.temperature, units);
          const isNow = idx === 0;

          return (
            <div
              key={item.time}
              className={`flex flex-col items-center justify-between p-3 rounded-2xl border transition-all shrink-0 min-w-[76px] ${
                isNow
                  ? 'bg-white/20 border-white/40 shadow-md ring-1 ring-white/30'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className="text-[11px] font-semibold text-white/80">
                {isNow ? 'Now' : item.hour}
              </span>

              <div className="my-2 p-1.5 rounded-xl bg-white/10">
                <WeatherIcon mood={item.mood} className="w-6 h-6 text-white" />
              </div>

              <div className="text-sm font-bold text-white tracking-tight">
                {temp}°
              </div>

              <div className="flex items-center gap-0.5 text-[10px] text-sky-300 font-semibold mt-1">
                <Droplet className="w-2.5 h-2.5 fill-sky-300" />
                <span>{item.precipitationProbability}%</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recharts Hourly Temperature Area Chart */}
      <div className="h-44 w-full mt-4 pt-2 border-t border-white/10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="nimbusTempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-stroke, #38BDF8)" stopOpacity={0.5} />
                <stop offset="95%" stopColor="var(--chart-stroke, #38BDF8)" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="hour"
              stroke="rgba(255,255,255,0.4)"
              fontSize={11}
              tickLine={false}
              interval={2}
            />
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              fontSize={10}
              tickLine={false}
              domain={['dataMin - 2', 'dataMax + 2']}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="glass-panel p-2.5 rounded-xl border border-white/25 shadow-xl text-xs text-white">
                      <div className="font-bold text-amber-300">{data.hour}</div>
                      <div className="text-sm font-bold">{data.temp}°{units === 'imperial' ? 'F' : 'C'}</div>
                      <div className="text-[11px] text-white/70">{data.description}</div>
                      <div className="text-[10px] text-sky-300 mt-0.5">Precip: {data.precip}%</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="var(--chart-stroke, #38BDF8)"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#nimbusTempGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
