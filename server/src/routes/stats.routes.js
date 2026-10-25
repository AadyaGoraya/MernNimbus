const express = require('express');
const statsController = require('../controllers/stats.controller');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/moods', requireAuth, statsController.getMoodStats);

module.exports = router;
