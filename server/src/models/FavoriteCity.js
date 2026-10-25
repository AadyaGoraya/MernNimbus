const mongoose = require('mongoose');

const favoriteCitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
    },
    name: {
      type: String,
      required: [true, 'City name is required'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Country name is required'],
      trim: true,
    },
    admin1: {
      type: String,
      trim: true,
      default: '',
    },
    lat: {
      type: Number,
      required: [true, 'Latitude is required'],
    },
    lon: {
      type: Number,
      required: [true, 'Longitude is required'],
    },
    timezone: {
      type: String,
      required: [true, 'Timezone is required'],
      default: 'auto',
    },
    nickname: {
      type: String,
      trim: true,
      maxlength: [50, 'Nickname cannot exceed 50 characters'],
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * WHY: Unique compound index on { user: 1, lat: 1, lon: 1 }:
 * 1. Business Logic: A user should not be able to save the exact same geographical location twice.
 * 2. Performance & Deduplication: Prevents duplicate records from polluting the favorites grid and
 *    stops redundant API requests when fetching weather for all saved favorites.
 * 3. Database-level Guarantee: Even if two save requests arrive concurrently (race condition),
 *    the compound unique index enforces data integrity at the database layer.
 */
favoriteCitySchema.index({ user: 1, lat: 1, lon: 1 }, { unique: true });

const FavoriteCity = mongoose.model('FavoriteCity', favoriteCitySchema);
module.exports = FavoriteCity;
