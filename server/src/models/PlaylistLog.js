const mongoose = require('mongoose');

const playlistLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
    },
    mood: {
      type: String,
      required: [true, 'Mood is required'],
      enum: [
        'clear',
        'clear-day',
        'clear-night',
        'partly-cloudy',
        'cloudy',
        'rain',
        'thunderstorm',
        'snow',
        'fog',
      ],
    },
    city: {
      type: String,
      required: [true, 'City name is required'],
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index to optimize aggregation by user and mood
playlistLogSchema.index({ user: 1, mood: 1, createdAt: -1 });

const PlaylistLog = mongoose.model('PlaylistLog', playlistLogSchema);
module.exports = PlaylistLog;
