import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Cloud, Heart, SplitSquareVertical, BarChart3, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useWeather } from '../../context/WeatherContext';

export default function Navbar() {
  const { user, isAuthenticated, logout, units, updateUnits, promptLogin } = useAuth();
  const { favorites } = useWeather();
  const navigate = useNavigate();

  const navItems = [
    { to: '/', label: 'Sky', icon: Cloud },
    {
      to: '/favorites',
      label: 'Favorites',
      icon: Heart,
      badge: isAuthenticated && favorites.length > 0 ? favorites.length : null,
    },
    { to: '/compare', label: 'Compare', icon: SplitSquareVertical },
    { to: '/insights', label: 'Insights', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 glass-panel rounded-2xl px-4 sm:px-6 py-2.5">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:scale-105 group-hover:bg-white/20 transition-all shadow-md">
            <Cloud className="w-5 h-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-lg font-light leading-none text-white drop-shadow-sm">
              NIMBUS
            </span>
            <span className="text-[10px] tracking-wider uppercase text-white/70 font-semibold leading-tight">
              Weather Mood
            </span>
          </div>
        </Link>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white/25 text-white shadow-sm border border-white/30'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge !== null && (
                  <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] bg-amber-400 text-slate-900 font-bold">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Action Tools: Units Toggle + Auth */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* C / F Units Switcher */}
          <div className="flex items-center bg-black/30 rounded-xl p-0.5 border border-white/15 text-xs font-bold">
            <button
              onClick={() => updateUnits('metric')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                units === 'metric'
                  ? 'bg-white/30 text-white shadow-sm border border-white/20'
                  : 'text-white/60 hover:text-white'
              }`}
              title="Celsius"
            >
              °C
            </button>
            <button
              onClick={() => updateUnits('imperial')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                units === 'imperial'
                  ? 'bg-white/30 text-white shadow-sm border border-white/20'
                  : 'text-white/60 hover:text-white'
              }`}
              title="Fahrenheit"
            >
              °F
            </button>
          </div>

          {/* User Profile / Login */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 pl-2 pr-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs text-white">
                <div className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-[11px]">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium max-w-[100px] truncate">{user.username}</span>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-xl bg-white/10 hover:bg-red-500/20 text-white/80 hover:text-red-200 border border-white/15 transition-all"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/auth')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <User className="w-3.5 h-3.5 text-amber-300" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden flex items-center justify-around mt-2 glass-panel rounded-xl py-2 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                  isActive
                    ? 'text-amber-300'
                    : 'text-white/70 hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </header>
  );
}
