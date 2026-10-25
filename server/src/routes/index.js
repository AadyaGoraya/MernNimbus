const express = require('express');
const authRoutes = require('./auth.routes');
const weatherRoutes = require('./weather.routes');
const favoritesRoutes = require('./favorites.routes');
const playlistRoutes = require('./playlist.routes');
const statsRoutes = require('./stats.routes');

const apiRouter = express.Router();

apiRouter.use('/auth', authRoutes);
apiRouter.use('/weather', weatherRoutes);
apiRouter.use('/favorites', favoritesRoutes);
apiRouter.use('/playlist', playlistRoutes);
apiRouter.use('/stats', statsRoutes);

// Health check endpoint
apiRouter.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    error: null,
  });
});

module.exports = apiRouter;
