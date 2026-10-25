const express = require('express');
const playlistController = require('../controllers/playlist.controller');
const { optionalAuth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const {
  playlistQuerySchema,
  playlistLogSchema,
} = require('../utils/validationSchemas');

const router = express.Router();

router.get(
  '/',
  validate(playlistQuerySchema),
  playlistController.getPlaylist
);

router.post(
  '/log',
  optionalAuth,
  validate(playlistLogSchema),
  playlistController.logPlaylistMood
);

module.exports = router;
