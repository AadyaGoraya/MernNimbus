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
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-300 mb-1">
            <Heart className="w-4 h-4 fill-amber-300" />
            <span>Your Personal Vibe Vault 💖</span>
          </div>
          <h1 className="heading-fraunces text-2xl sm:text-4xl font-light text-white tracking-wide">
            Saved Sky Mixtapes
          </h1>
          <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
            Live weather previews, custom nicknames, and 1-tap sonic teleports for your favorite places across the globe.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold shadow-lg transition-all active:scale-95 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Explore New Skies</span>
        </button>
      </div>

      {/* Guest Mode Notice */}
      {!isAuthenticated && (
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-400/30 text-center shadow-xl">
          <div className="inline-flex p-3 rounded-2xl bg-amber-400/20 text-amber-300 mb-3">
            <LogIn className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-light text-white mb-2">
            Sign In to Unlock Favorites
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-5">
            Your saved cities and personalized nicknames are synchronized across your devices with your Nimbus account.
          </p>
          <button
            onClick={() => promptLogin('view and manage your favorite cities')}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl hover:from-amber-300 hover:to-amber-400 transition-all active:scale-95"
          >
            Sign In / Create Account
          </button>
        </div>
      )}

      {/* Authenticated with Empty Favorites */}
      {isAuthenticated && favorites.length === 0 && (
        <div className="glass-panel rounded-3xl p-10 sm:p-14 text-center border border-white/15 shadow-xl max-w-2xl mx-auto">
          {/* Custom Illustrated SVG Empty State */}
          <svg
            className="w-40 h-40 mx-auto mb-6 text-white/30 drop-shadow-xl"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <path
              d="M135 125H75a25 25 0 0 1-5-49.5A35 35 0 0 1 138 72a25 25 0 0 1-3 53Z"
              fill="rgba(255,255,255,0.1)"
              stroke="white"
              strokeWidth="2.5"
            />
            <path
              d="M100 65v-15m-35 30-10-10m70 0 10-10"
              stroke="#FBBF24"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="100" cy="125" r="4" fill="#F87171" />
          </svg>

          <h2 className="font-serif text-2xl font-light text-white mb-2">
            No Saved Skies Yet
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-6">
            Search for your favorite cities around the globe on the Sky page and click the heart icon to pin them here!
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Discover Cities</span>
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
