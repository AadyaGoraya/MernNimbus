const rateLimit = require('express-rate-limit');

/**
 * Rate Limiter for Authentication (prevent brute-force password guessing)
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // 30 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    data: null,
    error: {
      message: 'Too many authentication attempts. Please try again after 15 minutes.',
    },
  },
});

/**
 * Rate Limiter for Weather Search & Autocomplete
 */
const weatherSearchLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // 60 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    data: null,
    error: {
      message: 'Search rate limit exceeded. Please slow down your typing.',
    },
  },
});

/**
 * General API Limiter
 */
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    data: null,
    error: {
      message: 'Too many requests from this IP. Please try again later.',
    },
  },
});

module.exports = {
  authLimiter,
  weatherSearchLimiter,
  generalLimiter,
};
