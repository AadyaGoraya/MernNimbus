const { getPlaylistForMood } = require('../data/playlists');
const PlaylistLog = require('../models/PlaylistLog');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * GET /api/v1/playlist?mood=&isDay=
 * Retrieve curated tracks for atmospheric mood
 */
const getPlaylist = asyncHandler(async (req, res) => {
  const mood = req.query.mood || 'clear-day';
  const isDay = req.query.isDay === undefined ? 1 : req.query.isDay === 'true' || req.query.isDay === '1';
  const refresh = req.query.refresh === 'true' || req.query.refresh === '1';

  const playlist = getPlaylistForMood(mood, isDay, refresh);

  res.status(200).json({
    success: true,
    data: playlist,
    error: null,
  });
});

/**
 * POST /api/v1/playlist/log
 * Log mood listening activity for analytics
 */
const logPlaylistMood = asyncHandler(async (req, res, next) => {
  const { mood, city } = req.body;

  if (!mood || !city) {
    return next(new AppError('Both "mood" and "city" are required to log activity.', 400));
  }

  // If user is authenticated, associate log with user
  const userId = req.user ? req.user._id : null;

  if (!userId) {
    // For guest sessions, return success without DB write or log as anonymous
    return res.status(200).json({
      success: true,
      data: {
        message: 'Guest session acknowledged.',
        logged: false,
      },
      error: null,
    });
  }

  const logEntry = await PlaylistLog.create({
    user: userId,
    mood,
    city,
  });

  res.status(201).json({
    success: true,
    data: {
      message: 'Mood listening activity recorded.',
      log: logEntry,
    },
    error: null,
  });
});

module.exports = {
  getPlaylist,
  logPlaylistMood,
};
