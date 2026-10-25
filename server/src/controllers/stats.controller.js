const PlaylistLog = require('../models/PlaylistLog');
const asyncHandler = require('../utils/asyncHandler');

/**
 * GET /api/v1/stats/moods
 * MongoDB Aggregation of user's mood history:
 * Groups playlist logs by mood, calculates count, percentages, and insight taglines.
 */
const getMoodStats = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const aggregation = await PlaylistLog.aggregate([
    {
      $match: {
        user: userId,
      },
    },
    {
      $group: {
        _id: '$mood',
        count: { $sum: 1 },
        lastListened: { $max: '$createdAt' },
        cities: { $addToSet: '$city' },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
  ]);

  const totalLogs = aggregation.reduce((sum, item) => sum + item.count, 0);

  // Palette colors for donut chart
  const moodColors = {
    'clear-day': '#FF9A3C',
    'clear-night': '#6366F1',
    'partly-cloudy': '#38BDF8',
    cloudy: '#94A3B8',
    rain: '#0284C7',
    thunderstorm: '#A855F7',
    snow: '#67E8F9',
    fog: '#CBD5E1',
    clear: '#FF9A3C',
  };

  const formattedStats = aggregation.map((item) => {
    const percentage = totalLogs > 0 ? Math.round((item.count / totalLogs) * 100) : 0;
    return {
      mood: item._id,
      count: item.count,
      percentage,
      color: moodColors[item._id] || '#6366F1',
      lastListened: item.lastListened,
      uniqueCities: item.cities.length,
    };
  });

  const topMood = formattedStats.length > 0 ? formattedStats[0] : null;
  let insightLine = 'No listening history yet. Explore a city to start your mood timeline!';

  if (topMood) {
    const friendlyName = topMood.mood.replace('-', ' ');
    insightLine = `You live in ${friendlyName} mode ${topMood.percentage}% of the time.`;
  }

  res.status(200).json({
    success: true,
    data: {
      totalListens: totalLogs,
      topMood: topMood ? topMood.mood : null,
      insightLine,
      breakdown: formattedStats,
    },
    error: null,
  });
});

module.exports = {
  getMoodStats,
};
