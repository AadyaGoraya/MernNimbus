import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('nimbus_token'));
  const [isGuest, setIsGuest] = useState(() => localStorage.getItem('nimbus_guest') === 'true');
  const [sessionEntered, setSessionEntered] = useState(() => sessionStorage.getItem('nimbus_session_entered_v2') === 'true');
  const [units, setUnits] = useState(() => localStorage.getItem('nimbus_units') || 'metric');
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalAction, setAuthModalAction] = useState('save favorite city');

  // Load user profile on startup if token is stored
  useEffect(() => {
    async function loadUser() {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await api.get('/auth/me');
        if (res.success && res.data.user) {
          setUser(res.data.user);
          if (res.data.user.units) {
            setUnits(res.data.user.units);
            localStorage.setItem('nimbus_units', res.data.user.units);
          }
        }
      } catch (err) {
        // Invalid or expired token
        localStorage.removeItem('nimbus_token');
        setToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, [token]);

  const enterApp = () => {
    sessionStorage.setItem('nimbus_session_entered_v2', 'true');
    setSessionEntered(true);
  };

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    if (res.success && res.data) {
      const { token: newToken, user: newUser } = res.data;
      localStorage.setItem('nimbus_token', newToken);
      setToken(newToken);
      setUser(newUser);
      if (newUser.units) {
        setUnits(newUser.units);
        localStorage.setItem('nimbus_units', newUser.units);
      }
      setIsAuthModalOpen(false);
      enterApp();
      toast.success(`Welcome back, ${newUser.username}`);
      return newUser;
    }
    throw new Error('Login failed');
  };

  const register = async (username, email, password, preferredUnits = 'metric') => {
    const res = await api.post('/auth/register', {
      username,
      email,
      password,
      units: preferredUnits,
    });
    if (res.success && res.data) {
      const { token: newToken, user: newUser } = res.data;
      localStorage.setItem('nimbus_token', newToken);
      setToken(newToken);
      setUser(newUser);
      setUnits(newUser.units);
      localStorage.setItem('nimbus_units', newUser.units);
      setIsAuthModalOpen(false);
      enterApp();
      toast.success(`Account created. Welcome to Nimbus, ${newUser.username}`);
      return newUser;
    }
    throw new Error('Registration failed');
  };

  const enterAsGuest = () => {
    localStorage.setItem('nimbus_guest', 'true');
    setIsGuest(true);
    enterApp();
    toast.success('Browsing Nimbus as Guest');
  };

  const logout = () => {
    localStorage.removeItem('nimbus_token');
    localStorage.removeItem('nimbus_guest');
    sessionStorage.removeItem('nimbus_session_entered_v2');
    setToken(null);
    setUser(null);
    setIsGuest(false);
    setSessionEntered(false);
    toast.success('Signed out. See you under the open sky!');
  };

  const updateUnits = async (newUnits) => {
    setUnits(newUnits);
    localStorage.setItem('nimbus_units', newUnits);

    if (user && token) {
      try {
        await api.patch('/auth/me', { units: newUnits });
        setUser((prev) => (prev ? { ...prev, units: newUnits } : prev));
      } catch (err) {
        console.error('Failed to persist units preference:', err);
      }
    }
  };

  const promptLogin = (actionDescription = 'access this feature') => {
    setAuthModalAction(actionDescription);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  // hasAccess is true only when the user has entered the app (via login, register, or guest choice)
  const hasAccess = Boolean(sessionEntered && ((user && token) || isGuest));

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        units,
        isLoading,
        isGuest,
        sessionEntered,
        hasAccess,
        isAuthenticated: Boolean(user && token),
        isAuthModalOpen,
        authModalAction,
        login,
        register,
        logout,
        enterApp,
        enterAsGuest,
        updateUnits,
        promptLogin,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
