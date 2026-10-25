const { z } = require('zod');

// Auth validation schemas
const registerSchema = z.object({
  body: z.object({
    username: z
      .string()
      .trim()
      .min(3, 'Username must be at least 3 characters long')
      .max(30, 'Username cannot exceed 30 characters'),
    email: z
      .string()
      .trim()
      .email('Please provide a valid email address')
      .toLowerCase(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long'),
    units: z.enum(['metric', 'imperial']).optional().default('metric'),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z
      .string()
      .trim()
      .email('Please provide a valid email address')
      .toLowerCase(),
    password: z.string().min(1, 'Password is required'),
  }),
});

const updateUnitsSchema = z.object({
  body: z.object({
    units: z.enum(['metric', 'imperial'], {
      required_error: 'Units must be either "metric" or "imperial"',
    }),
  }),
});

// Weather validation schemas
const weatherSearchSchema = z.object({
  query: z.object({
    q: z
      .string()
      .trim()
      .min(1, 'Search query cannot be empty')
      .max(100, 'Search query too long'),
  }),
});

const weatherForecastSchema = z.object({
  query: z.object({
    lat: z
      .string()
      .refine((val) => !isNaN(Number(val)) && Number(val) >= -90 && Number(val) <= 90, {
        message: 'Latitude must be a valid number between -90 and 90',
      }),
    lon: z
      .string()
      .refine((val) => !isNaN(Number(val)) && Number(val) >= -180 && Number(val) <= 180, {
        message: 'Longitude must be a valid number between -180 and 180',
      }),
  }),
});

// Favorites validation schemas
const createFavoriteSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, 'City name is required'),
    country: z.string().trim().min(1, 'Country is required'),
    admin1: z.string().trim().optional().default(''),
    lat: z.number().min(-90).max(90, 'Latitude must be between -90 and 90'),
    lon: z.number().min(-180).max(180, 'Longitude must be between -180 and 180'),
    timezone: z.string().trim().min(1, 'Timezone is required').default('auto'),
    nickname: z.string().trim().max(50, 'Nickname cannot exceed 50 characters').optional().default(''),
  }),
});

const updateFavoriteSchema = z.object({
  body: z.object({
    nickname: z.string().trim().max(50, 'Nickname cannot exceed 50 characters').optional().default(''),
  }),
});

// Playlist validation schemas
const playlistQuerySchema = z.object({
  query: z.object({
    mood: z.string().optional(),
    isDay: z.string().optional(),
    refresh: z.string().optional(),
  }),
});

const playlistLogSchema = z.object({
  body: z.object({
    mood: z.enum([
      'clear',
      'clear-day',
      'clear-night',
      'partly-cloudy',
      'cloudy',
      'rain',
      'thunderstorm',
      'snow',
      'fog',
    ]),
    city: z.string().trim().min(1, 'City is required'),
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateUnitsSchema,
  weatherSearchSchema,
  weatherForecastSchema,
  createFavoriteSchema,
  updateFavoriteSchema,
  playlistQuerySchema,
  playlistLogSchema,
};
