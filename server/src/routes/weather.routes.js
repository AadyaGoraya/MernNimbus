const express = require('express');
const weatherController = require('../controllers/weather.controller');
const validate = require('../middleware/validate');
const { weatherSearchLimiter } = require('../middleware/rateLimiter');
const {
  weatherSearchSchema,
  weatherForecastSchema,
} = require('../utils/validationSchemas');

const router = express.Router();

// Autocomplete city search with rate limiting
router.get(
  '/search',
  weatherSearchLimiter,
  validate(weatherSearchSchema),
  weatherController.search
);

// Proxied forecast with 10-minute node-cache
router.get(
  '/',
  validate(weatherForecastSchema),
  weatherController.getForecast
);

module.exports = router;
