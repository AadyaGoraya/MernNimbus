require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await connectDB();

    const server = app.listen(PORT, () => {
      console.log(`[NIMBUS Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
      console.log(`[NIMBUS Server] API available at http://localhost:${PORT}/api/v1`);
    });

    // Graceful shutdown handling
    const shutdown = async (signal) => {
      console.log(`\n[NIMBUS Server] Received ${signal}. Gracefully terminating...`);
      server.close(() => {
        console.log('[NIMBUS Server] HTTP server closed.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  } catch (error) {
    console.error(`[NIMBUS Server] Fatal startup error: ${error.message}`);
    process.exit(1);
  }
}

startServer();
