import React from 'react';
import { motion } from 'framer-motion';
import CitySearch from '../components/home/CitySearch';
import WeatherHero from '../components/home/WeatherHero';
import StatChips from '../components/home/StatChips';
import HourlyStrip from '../components/home/HourlyStrip';
import SevenDayForecast from '../components/home/SevenDayForecast';
import MoodPlaylistCard from '../components/home/MoodPlaylistCard';
import { WeatherHeroSkeleton, StatChipsSkeleton } from '../components/common/Skeleton';
import { useWeather } from '../context/WeatherContext';

export default function HomePage() {
  const { isLoading, weatherError } = useWeather();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 space-y-6">
      {/* Search Header */}
      <CitySearch />

      {/* Weather Content */}
      {isLoading ? (
        <>
          <WeatherHeroSkeleton />
          <StatChipsSkeleton />
        </>
      ) : weatherError ? (
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border border-red-500/30 text-white my-8">
          <h2 className="font-serif text-2xl font-light mb-2 text-red-200">
            Atmospheric Signal Lost
          </h2>
          <p className="text-sm text-white/70 max-w-md mx-auto mb-4">
            {weatherError}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold"
          >
            Refresh Atmospheric Radar
          </button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Weather Hero Card */}
          <motion.div variants={itemVariants}>
            <WeatherHero />
          </motion.div>

          {/* Quick Metrics */}
          <motion.div variants={itemVariants}>
            <StatChips />
          </motion.div>

          {/* 24-Hour Horizon & Recharts Curve */}
          <motion.div variants={itemVariants}>
            <HourlyStrip />
          </motion.div>

          {/* 2-Column Split: 7-Day Forecast + Mood Playlist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <motion.div variants={itemVariants}>
              <SevenDayForecast />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MoodPlaylistCard />
            </motion.div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
