require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');
const FavoriteCity = require('./models/FavoriteCity');
const PlaylistLog = require('./models/PlaylistLog');

const DEMO_EMAIL = (process.env.DEMO_EMAIL || 'demo@nimbus.app').toLowerCase();
const DEMO_PASSWORD = process.env.DEMO_PASSWORD || 'NimbusDemo2026!';
const DEMO_USERNAME = 'NimbusVoyager';

const SEED_CITIES = [
  {
    name: 'Bengaluru',
    country: 'India',
    admin1: 'Karnataka',
    lat: 12.9716,
    lon: 77.5946,
    timezone: 'Asia/Kolkata',
    nickname: 'Silicon Plateau',
  },
  {
    name: 'London',
    country: 'United Kingdom',
    admin1: 'England',
    lat: 51.5074,
    lon: -0.1278,
    timezone: 'Europe/London',
    nickname: 'Misty Thames',
  },
  {
    name: 'Reykjavik',
    country: 'Iceland',
    admin1: 'Capital Region',
    lat: 64.1466,
    lon: -21.9426,
    timezone: 'Atlantic/Reykjavik',
    nickname: 'Arctic Chill',
  },
  {
    name: 'Dubai',
    country: 'United Arab Emirates',
    admin1: 'Dubai',
    lat: 25.2048,
    lon: 55.2708,
    timezone: 'Asia/Dubai',
    nickname: 'Golden Desert',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    admin1: 'Tokyo',
    lat: 35.6762,
    lon: 139.6503,
    timezone: 'Asia/Tokyo',
    nickname: 'Neon Rain',
  },
  {
    name: 'Sydney',
    country: 'Australia',
    admin1: 'New South Wales',
    lat: -33.8688,
    lon: 151.2093,
    timezone: 'Australia/Sydney',
    nickname: 'Harbour Sun',
  },
];

const MOODS_POOL = [
  { mood: 'rain', weight: 14, city: 'London' },
  { mood: 'clear-day', weight: 10, city: 'Sydney' },
  { mood: 'partly-cloudy', weight: 8, city: 'Bengaluru' },
  { mood: 'clear-night', weight: 5, city: 'Dubai' },
  { mood: 'thunderstorm', weight: 4, city: 'Tokyo' },
  { mood: 'snow', weight: 3, city: 'Reykjavik' },
  { mood: 'cloudy', weight: 3, city: 'London' },
  { mood: 'fog', weight: 2, city: 'Reykjavik' },
];

async function seed() {
  console.log('[SEED] Starting NIMBUS database seed...');
  await connectDB();

  try {
    // 1. Idempotently find or create Demo User
    let demoUser = await User.findOne({ email: DEMO_EMAIL });
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(DEMO_PASSWORD, salt);

    if (demoUser) {
      console.log(`[SEED] Demo user exists (${DEMO_EMAIL}). Refreshing credentials...`);
      demoUser.passwordHash = passwordHash;
      demoUser.username = DEMO_USERNAME;
      demoUser.units = 'metric';
      await demoUser.save();
    } else {
      console.log(`[SEED] Creating demo user (${DEMO_EMAIL})...`);
      demoUser = await User.create({
        username: DEMO_USERNAME,
        email: DEMO_EMAIL,
        passwordHash,
        units: 'metric',
      });
    }

    const userId = demoUser._id;

    // 2. Clear previous seed data for this demo user to maintain clean idempotency
    await FavoriteCity.deleteMany({ user: userId });
    await PlaylistLog.deleteMany({ user: userId });
    console.log('[SEED] Cleared previous favorites and logs for demo user.');

    // 3. Seed Favorite Cities
    const favoriteDocs = SEED_CITIES.map((c) => ({
      ...c,
      user: userId,
    }));
    const createdFavorites = await FavoriteCity.insertMany(favoriteDocs);
    console.log(`[SEED] Successfully seeded ${createdFavorites.length} favorite cities.`);

    // 4. Seed ~40 Playlist Logs spread over the last 30 days
    const now = Date.now();
    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
    const logs = [];

    MOODS_POOL.forEach((entry) => {
      for (let i = 0; i < entry.weight; i++) {
        // Distribute timestamp within the last 30 days
        const randomTimeOffset = Math.floor(Math.random() * thirtyDaysMs);
        const logDate = new Date(now - randomTimeOffset);

        logs.push({
          user: userId,
          mood: entry.mood,
          city: entry.city,
          createdAt: logDate,
          updatedAt: logDate,
        });
      }
    });

    // Shuffle logs array for realistic order
    logs.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    const createdLogs = await PlaylistLog.insertMany(logs);
    console.log(`[SEED] Successfully seeded ${createdLogs.length} mood playlist history logs.`);

    console.log('\n=========================================');
    console.log('       NIMBUS SEED COMPLETED! ⛅✨       ');
    console.log('=========================================');
    console.log(` Demo Email    : ${DEMO_EMAIL}`);
    console.log(` Demo Password : ${DEMO_PASSWORD}`);
    console.log(` Cities Seeded : ${createdFavorites.map((f) => f.name).join(', ')}`);
    console.log(` History Logs  : ${createdLogs.length} events logged`);
    console.log('=========================================\n');

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error(`[SEED ERROR] Failed to seed database: ${err.message}`);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seed();
