const weatherService = require('../services/weather.service');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

/**
 * GET /api/v1/weather/search?q=
 */
const search = asyncHandler(async (req, res, next) => {
  const { q } = req.query;
  if (!q || !q.trim()) {
    return next(new AppError('Search query parameter "q" is required.', 400));
  }

  const results = await weatherService.searchCities(q.trim());

  res.status(200).json({
    success: true,
    data: results,
    error: null,
  });
});

/**
 * GET /api/v1/weather?lat=&lon=
 */
const getForecast = asyncHandler(async (req, res, next) => {
  const { lat, lon } = req.query;

  if (lat === undefined || lon === undefined) {
    return next(new AppError('Both "lat" and "lon" query parameters are required.', 400));
  }

  const latitude = parseFloat(lat);
  const longitude = parseFloat(lon);

  if (isNaN(latitude) || isNaN(longitude)) {
    return next(new AppError('Invalid coordinates provided.', 400));
  }

  const weather = await weatherService.getWeatherForecast(latitude, longitude);

  res.status(200).json({
    success: true,
    data: weather,
    error: null,
  });
});

module.exports = {
  search,
  getForecast,
};
