import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, Sparkles, LogIn } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { useAuth } from '../context/AuthContext';
import FavoriteCard from '../components/favorites/FavoriteCard';

export default function FavoritesPage() {
  const { favorites, fetchWeatherForCity, deleteFavoriteById, updateNickname } = useWeather();
  const { isAuthenticated, promptLogin } = useAuth();
  const navigate = useNavigate();

  const handleSelectCity = (city) => {
    fetchWeatherForCity({
      name: city.name,
      country: city.country,
      admin1: city.admin1 || '',
      lat: city.lat,
      lon: city.lon,
      timezone: city.timezone || 'auto',
    });
    navigate('/');
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Saved Locations</span>
          </div>
          <h1 className="heading-fraunces text-2xl sm:text-4xl font-light text-white tracking-tight">
            Tracked Cities & Soundscapes
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Live atmospheric previews, custom identifiers, and instant audio synchronization for your tracked locations.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white text-xs font-medium transition-all active:scale-95 self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Explore Locations</span>
        </button>
      </div>

      {/* Guest Mode Notice */}
      {!isAuthenticated && (
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 text-center shadow-xl">
          <div className="inline-flex p-3 rounded-2xl bg-white/5 text-white/70 mb-3">
            <LogIn className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-light text-white mb-2">
            Sign In to Access Saved Locations
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto mb-5">
            Synchronize tracked locations and custom identifiers securely across sessions.
          </p>
          <button
            onClick={() => promptLogin('view and manage your favorite cities')}
            className="px-6 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-white/90 transition-all active:scale-95"
          >
            Sign In
          </button>
        </div>
      )}

      {/* Authenticated with Empty Favorites */}
      {isAuthenticated && favorites.length === 0 && (
        <div className="glass-panel rounded-3xl p-10 sm:p-14 text-center border border-white/10 shadow-xl max-w-2xl mx-auto">
          {/* Custom Illustrated SVG Empty State */}
          <svg
            className="w-32 h-32 mx-auto mb-5 text-white/20 drop-shadow-xl"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
            <path
              d="M135 125H75a25 25 0 0 1-5-49.5A35 35 0 0 1 138 72a25 25 0 0 1-3 53Z"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
            />
          </svg>

          <h2 className="font-serif text-2xl font-light text-white mb-2">
            No Locations Pinned
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto mb-6">
            Search for any city on the dashboard and click the heart icon to pin it to your quick-access index.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-md active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>Search Locations</span>
          </button>
        </div>
      )}

      {/* Favorites Grid */}
      {isAuthenticated && favorites.length > 0 && (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {favorites.map((city) => (
              <FavoriteCard
                key={city._id}
                city={city}
                onSelect={handleSelectCity}
                onDelete={deleteFavoriteById}
                onUpdateNickname={updateNickname}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </main>
  );
}
