import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/common/Navbar';
import WeatherCanvas from './components/canvas/WeatherCanvas';
import DemoMoodSwitcher from './components/common/DemoMoodSwitcher';
import AuthModal from './components/common/AuthModal';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import ComparePage from './pages/ComparePage';
import InsightsPage from './pages/InsightsPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import { useWeather } from './context/WeatherContext';
import { useAuth } from './context/AuthContext';

export default function App() {
  const { hasAccess } = useAuth();
  const {
    effectiveMood,
    forcedMood,
    setForcedMood,
    resetForcedMood,
    weatherData,
  } = useWeather();

  // If user is not logged in and hasn't chosen guest mode, present the Login Landing Page first
  if (!hasAccess) {
    return (
      <div className="relative min-h-screen flex flex-col antialiased justify-center">
        <WeatherCanvas mood={effectiveMood} />
        <div className="flex-1 flex items-center justify-center p-4">
          <AuthPage />
        </div>
        <DemoMoodSwitcher
          currentMood={weatherData?.mood || 'clear-day'}
          forcedMood={forcedMood}
          onSelectMood={setForcedMood}
          onReset={resetForcedMood}
        />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(16px)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '1rem',
              padding: '0.75rem 1.25rem',
              fontSize: '0.8125rem',
            },
            success: {
              iconTheme: {
                primary: '#FBBF24',
                secondary: '#0F172A',
              },
            },
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col antialiased">
      {/* Full-Screen Weather-Driven Particle Canvas Engine */}
      <WeatherCanvas mood={effectiveMood} />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Router */}
      <div className="flex-1 pb-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Global Interactive Auth Modal for Guest Triggers */}
      <AuthModal />

      {/* Examiner Demo Mood Floating Switcher */}
      <DemoMoodSwitcher
        currentMood={weatherData?.mood || 'clear-day'}
        forcedMood={forcedMood}
        onSelectMood={setForcedMood}
        onReset={resetForcedMood}
      />

      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(16px)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1rem',
            padding: '0.75rem 1.25rem',
            fontSize: '0.8125rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          },
          success: {
            iconTheme: {
              primary: '#FBBF24',
              secondary: '#0F172A',
            },
          },
          error: {
            iconTheme: {
              primary: '#F87171',
              secondary: '#0F172A',
            },
          },
        }}
      />
    </div>
  );
}
