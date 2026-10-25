import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  User,
  Cloud,
  ArrowRight,
  LogOut,
  Sliders,
  Compass,
  Headphones,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWeather } from '../context/WeatherContext';

export default function AuthPage() {
  const { user, isAuthenticated, hasAccess, login, register, enterApp, enterAsGuest, logout } = useAuth();
  const { setForcedMood, effectiveMood } = useWeather();
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

  if (hasAccess) {
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
      setError(err.message || 'Authentication error. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const atmosphericModes = [
    { mood: 'clear-day', label: 'Clear Sky' },
    { mood: 'rain', label: 'Rain' },
    { mood: 'thunderstorm', label: 'Thunderstorm' },
    { mood: 'snow', label: 'Snow' },
    { mood: 'clear-night', label: 'Night' },
  ];

  return (
    <main className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[calc(100vh-60px)]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full glass-panel rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Left Side: Product Editorial & Atmospheric Sandbox */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-white/[0.01]">
          <div>
            {/* Header Brand */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center border border-white/[0.1] shadow">
                <Cloud className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="font-serif tracking-widest text-xl font-light text-white block">
                  NIMBUS
                </span>
                <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono font-medium">
                  Atmospheric Audio Intelligence
                </span>
              </div>
            </div>

            <h1 className="heading-fraunces text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-4 tracking-tight">
              Soundtracks synchronized with the sky.
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-light mb-8">
              A real-time meteorological music experience that translates global satellite atmospheric conditions into curated soundscapes and animated particle skies.
            </p>

            {/* Clean Feature List */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <Sliders className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-white block font-medium">Meteorological Precision</strong>
                  Direct satellite telemetry tracking temperature, precipitation, wind, and solar cycles.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <Headphones className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-white block font-medium">Curated Soundtracks</strong>
                  Handpicked audio tracks with in-app 30-second previews and Spotify & YouTube links.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-white block font-medium">Saved Locations & Analytics</strong>
                  Track favorite worldwide cities and view automated atmospheric listening insights.
                </div>
              </div>
            </div>
          </div>

          {/* Test Atmosphere Pill Selector */}
          <div className="pt-4 border-t border-white/[0.06]">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-2 font-medium">
              Preview Canvas Atmosphere:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {atmosphericModes.map((item) => {
                const isActive = effectiveMood === item.mood;
                return (
                  <button
                    key={item.mood}
                    type="button"
                    onClick={() => setForcedMood(item.mood)}
                    className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-white text-slate-950 font-semibold shadow'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.06]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Clean Form */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center bg-black/30">
          <div className="w-full max-w-sm mx-auto">
            {isAuthenticated && user ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/[0.08] border border-white/[0.1] text-white font-bold flex items-center justify-center text-xl shadow">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <h3 className="heading-fraunces text-2xl font-light text-white mb-1">
                  Welcome back, {user.username}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {user.email} · {user.units === 'imperial' ? 'Fahrenheit (°F)' : 'Celsius (°C)'}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    enterApp();
                    navigate('/');
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-200 text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mb-3 cursor-pointer"
                >
                  <span>Enter Application</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={logout}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white text-xs font-medium border border-white/[0.06] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Switch Account</span>
                </button>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="grid grid-cols-2 p-1 bg-white/[0.04] rounded-2xl mb-6 border border-white/[0.06] text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => {
                      setIsRegister(false);
                      setError('');
                    }}
                    className={`py-2 rounded-xl transition-all ${
                      !isRegister
                        ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
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
                    className={`py-2 rounded-xl transition-all ${
                      isRegister
                        ? 'bg-white/[0.12] text-white shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Create Account
                  </button>
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/15 border border-red-500/20 text-red-300 text-xs text-center font-medium">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
                  {isRegister && (
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                        Username
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          required
                          name="username_nimbus"
                          autoComplete="off"
                          value={formData.username}
                          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                          placeholder="e.g. skywalker"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 text-xs focus:border-white/30 transition-all outline-none"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        name="email_nimbus_login"
                        autoComplete="new-password"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 text-xs focus:border-white/30 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        minLength={6}
                        name="password_nimbus_login"
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 text-xs focus:border-white/30 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {isRegister && (
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                        Units Preference
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, units: 'metric' })}
                          className={`py-2 rounded-xl text-xs font-medium border ${
                            formData.units === 'metric'
                              ? 'bg-white text-slate-950 font-semibold border-white'
                              : 'bg-white/[0.04] text-slate-300 border-white/[0.06]'
                          }`}
                        >
                          Celsius (°C)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, units: 'imperial' })}
                          className={`py-2 rounded-xl text-xs font-medium border ${
                            formData.units === 'imperial'
                              ? 'bg-white text-slate-950 font-semibold border-white'
                              : 'bg-white/[0.04] text-slate-300 border-white/[0.06]'
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
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-semibold text-xs uppercase tracking-wider shadow transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{loading ? 'Authenticating...' : isRegister ? 'Create Account' : 'Sign In'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      enterAsGuest();
                      navigate('/');
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium border border-white/[0.06] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Continue as Guest</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center">
                    Demo credentials: <span className="font-mono text-slate-400">demo@nimbus.app</span> / <span className="font-mono text-slate-400">NimbusDemo2026!</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
