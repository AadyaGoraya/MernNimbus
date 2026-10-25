const mongoose = require('mongoose');
const User = require('../src/models/User');
const FavoriteCity = require('../src/models/FavoriteCity');

const TEST_DB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nimbus_test';

describe('FavoriteCity Compound Unique Index', () => {
  let testUser;

  beforeAll(async () => {
    await mongoose.connect(TEST_DB_URI);
    await FavoriteCity.syncIndexes(); // Ensure compound index { user: 1, lat: 1, lon: 1 } exists

    // Create a temporary test user
    testUser = await User.create({
      username: `testuser_${Date.now()}`,
      email: `test_${Date.now()}@nimbus.app`,
      passwordHash: 'dummyhash123',
    });
  });

  afterAll(async () => {
    if (testUser) {
      await FavoriteCity.deleteMany({ user: testUser._id });
      await User.findByIdAndDelete(testUser._id);
    }
    await mongoose.connection.close();
  });

  test('successfully saves a new favorite city', async () => {
    const favorite = await FavoriteCity.create({
      user: testUser._id,
      name: 'Oslo',
      country: 'Norway',
      lat: 59.9139,
      lon: 10.7522,
      timezone: 'Europe/Oslo',
      nickname: 'Nordic Fjord',
    });

    expect(favorite._id).toBeDefined();
    expect(favorite.name).toBe('Oslo');
  });

  test('blocks duplicate favorite city for the same user via unique compound index', async () => {
    let error;
    try {
      // Attempt to save the identical city (exact same user, lat, lon)
      await FavoriteCity.create({
        user: testUser._id,
        name: 'Oslo Duplicate',
        country: 'Norway',
        lat: 59.9139,
        lon: 10.7522,
        timezone: 'Europe/Oslo',
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    // MongoDB duplicate key error code is 11000
    expect(error.code).toBe(11000);
  });
});
