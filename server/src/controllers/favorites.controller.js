const FavoriteCity = require('../models/FavoriteCity');
const AppError = require('../utils/appError');
const asyncHandler = require('../utils/asyncHandler');

/**
 * GET /api/v1/favorites
 * List all saved cities for logged-in user
 */
const getFavorites = asyncHandler(async (req, res) => {
  const favorites = await FavoriteCity.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    data: favorites,
    error: null,
  });
});

/**
 * POST /api/v1/favorites
 * Add a city to user favorites
 */
const addFavorite = asyncHandler(async (req, res, next) => {
  const { name, country, admin1, lat, lon, timezone, nickname } = req.body;

  // Check if already saved by coordinates
  const existing = await FavoriteCity.findOne({
    user: req.user._id,
    lat,
    lon,
  });

  if (existing) {
    return next(
      new AppError(`${name} is already saved in your favorites.`, 409)
    );
  }

  const favorite = await FavoriteCity.create({
    user: req.user._id,
    name,
    country,
    admin1: admin1 || '',
    lat,
    lon,
    timezone: timezone || 'auto',
    nickname: nickname || '',
  });

  res.status(201).json({
    success: true,
    data: favorite,
    error: null,
  });
});

/**
 * PATCH /api/v1/favorites/:id
 * Update nickname of a favorite city
 */
const updateFavorite = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { nickname } = req.body;

  const favorite = await FavoriteCity.findOne({
    _id: id,
    user: req.user._id,
  });

  if (!favorite) {
    return next(new AppError('Favorite city not found.', 404));
  }

  favorite.nickname = nickname !== undefined ? nickname.trim() : favorite.nickname;
  await favorite.save();

  res.status(200).json({
    success: true,
    data: favorite,
    error: null,
  });
});

/**
 * DELETE /api/v1/favorites/:id
 * Remove city from favorites
 */
const deleteFavorite = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const favorite = await FavoriteCity.findOneAndDelete({
    _id: id,
    user: req.user._id,
  });

  if (!favorite) {
    return next(new AppError('Favorite city not found.', 404));
  }

  res.status(200).json({
    success: true,
    data: {
      message: 'City removed from favorites',
      deletedCity: favorite,
    },
    error: null,
  });
});

module.exports = {
  getFavorites,
  addFavorite,
  updateFavorite,
  deleteFavorite,
};
