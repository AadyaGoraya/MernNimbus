const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nimbus';

  try {
    const conn = await mongoose.connect(uri, {
      autoIndex: true, // Build indexes in dev for unique constraints
    });

    console.log(`[MongoDB] Connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.error(`[MongoDB] Initial connection error: ${err.message}`);
    // Retry once after 2 seconds
    try {
      console.log('[MongoDB] Retrying connection...');
      const conn = await mongoose.connect(uri);
      console.log(`[MongoDB] Connected on retry: ${conn.connection.host}`);
      return conn;
    } catch (retryErr) {
      console.error(`[MongoDB] Retry connection failed: ${retryErr.message}`);
      throw retryErr;
    }
  }
};

module.exports = connectDB;
