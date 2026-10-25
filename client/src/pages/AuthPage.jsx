import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Sparkles, Cloud, Music, ShieldCheck, ArrowRight, Headphones } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import WeatherIcon from '../components/common/WeatherIcon';

export default function AuthPage() {
  const { login, register, isAuthenticated, enterAsGuest } = useAuth();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    units: 'metric',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // If already authenticated, redirect to home
  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegister) {
        if (!formData.username.trim() || formData.username.length < 3) {
          throw new Error('Username must be at least 3 characters long');
        }
        await register(
          formData.username.trim(),
          formData.email.trim(),
          formData.password,
          formData.units
        );
      } else {
        await login(formData.email.trim(), formData.password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'Authentication error. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setFormData({
      username: 'NimbusVoyager',
      email: 'demo@nimbus.app',
      password: 'NimbusDemo2026!',
      units: 'metric',
    });
    setIsRegister(false);
    setError('');
  };

  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Animated Weather Atmosphere Showcase */}
        <div className="relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-amber-500/30 via-sky-600/30 to-purple-800/40 border-b lg:border-b-0 lg:border-r border-white/15">
          {/* Ambient Glowing Blobs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-amber-400/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-sky-400/30 blur-3xl pointer-events-none" />

          {/* Top Branding */}
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 shadow-lg">
                <Cloud className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="font-serif tracking-widest text-xl font-light text-white block">
                  NIMBUS
                </span>
                <span className="text-[10px] tracking-wider uppercase text-amber-300 font-bold">
                  The Weather Mixtape 🎵
                </span>
              </div>
            </div>

            <h2 className="heading-fraunces text-3xl sm:text-4xl font-light text-white leading-tight mb-4">
              The Sky Has the Aux Cord.
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
              Life’s too short for boring weather apps. Rainy afternoons get moody indie lo-fi, golden sunsets get acoustic warmth, and midnight storms get electric bass. Let the clouds pick your vibe.
            </p>
          </div>

          {/* Features Highlights */}
          <div className="relative z-10 my-8 space-y-3.5">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15">
              <Music className="w-5 h-5 text-amber-300 shrink-0" />
              <div className="text-xs text-white/90">
                <strong className="text-white block font-semibold">Real Tracks, Zero Fluff 💿</strong>
                Curated songs for all 8 weather moods with 1-click Spotify & YouTube links.
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15">
              <Sparkles className="w-5 h-5 text-sky-300 shrink-0" />
              <div className="text-xs text-white/90">
                <strong className="text-white block font-semibold">Living Sky Visualizer 🎨</strong>
                Smooth 60fps canvas particles of rain, lightning strikes, snow, and stars.
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15">
              <ShieldCheck className="w-5 h-5 text-emerald-300 shrink-0" />
              <div className="text-xs text-white/90">
                <strong className="text-white block font-semibold">Your Personal Vibe Vault 💖</strong>
                Save favorite cities, give them nicknames, and unlock "Sky Wrapped" analytics.
              </div>
            </div>
          </div>

          {/* Bottom Live Sky Badge */}
          <div className="relative z-10 flex items-center justify-between p-3.5 rounded-2xl bg-black/25 border border-white/15">
            <div className="flex items-center gap-2.5">
              <WeatherIcon mood="clear-day" className="w-6 h-6 text-amber-300" />
              <div>
                <div className="text-xs font-bold text-white">Live Worldwide Weather Vibe</div>
                <div className="text-[10px] text-white/60">Synced with real-time satellites 🛰️</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/20">
              AUX LIVE
            </span>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            {/* Form Mode Toggle */}
            <div className="grid grid-cols-2 p-1 bg-white/10 rounded-2xl mb-6 border border-white/15 text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setIsRegister(false);
                  setError('');
                }}
                className={`py-2.5 rounded-xl transition-all ${
                  !isRegister ? 'bg-white/30 text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRegister(true);
                  setError('');
                }}
                className={`py-2.5 rounded-xl transition-all ${
                  isRegister ? 'bg-white/30 text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                Register
              </button>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mb-5 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-xs font-medium text-center">
                {error}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 font-bold mb-1.5">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input
                      type="text"
                      required
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="skywalker"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:bg-white/15 transition-all outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 font-bold mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="demo@nimbus.app"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:bg-white/15 transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 font-bold mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:bg-white/15 transition-all outline-none"
                  />
                </div>
              </div>

              {isRegister && (
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 font-bold mb-1.5">
                    Preferred Units
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, units: 'metric' })}
                      className={`py-2 rounded-xl text-xs font-semibold border ${
                        formData.units === 'metric'
                          ? 'bg-white/30 text-white border-white/40 shadow'
                          : 'bg-white/10 text-white/60 border-white/15'
                      }`}
                    >
                      Celsius (°C)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, units: 'imperial' })}
                      className={`py-2 rounded-xl text-xs font-semibold border ${
                        formData.units === 'imperial'
                          ? 'bg-white/30 text-white border-white/40 shadow'
                          : 'bg-white/10 text-white/60 border-white/15'
                      }`}
                    >
                      Fahrenheit (°F)
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Authenticating...' : isRegister ? 'Create Account' : 'Sign In'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Autofill Helper */}
            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={handleFillDemo}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 text-xs font-semibold transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Autofill Demo Credentials</span>
              </button>
              <p className="text-[11px] text-white/50 mt-1.5">
                demo@nimbus.app / NimbusDemo2026!
              </p>

              {/* Guest Exploration Option */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    enterAsGuest();
                    navigate('/');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/15 text-white/90 text-xs font-semibold border border-white/15 transition-all flex items-center justify-center gap-2 group hover:border-white/30"
                >
                  <Headphones className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
                  <span>Explore as Guest (Skip Login for Now) →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
