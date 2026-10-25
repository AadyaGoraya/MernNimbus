const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const apiRoutes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const AppError = require('./utils/appError');
const { generalLimiter } = require('./middleware/rateLimiter');

const app = express();

// Security HTTP headers
app.use(helmet());

// Cross-Origin Resource Sharing
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or dev tools)
      if (
        !origin ||
        origin === clientUrl ||
        origin.startsWith('http://localhost:') ||
        origin.endsWith('.vercel.app') ||
        origin.includes('vercel.app') ||
        origin.endsWith('.github.io')
      ) {
        callback(null, true);
      } else {
        // Fallback allow origin with credentials for seamless deployment
        callback(null, true);
      }
    },
    credentials: true,
  })
);

// Body parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Global general rate limiter
app.use('/api', generalLimiter);

// Mount API v1 router
app.use('/api/v1', apiRoutes);

// Handle unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

// Central error handling middleware
app.use(errorHandler);

module.exports = app;
