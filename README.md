Atmospheric Intelligence Meets Sonic Harmony.
A full-stack MERN application that dynamically matches real-time weather conditions around the globe with curated mood playlists, immersive canvas particle visuals, and deep meteorological analytics.

📖 Overview
NIMBUS transforms traditional weather forecasting into an immersive sensory experience. By translating real-time meteorological data from Open-Meteo into distinct atmospheric mood profiles, NIMBUS dynamically sets the tone of your environment—pairing live sky conditions with handcrafted music playlists, animated canvas particle systems, and comprehensive forecasts.

Whether it’s a calm rainy afternoon, an electric thunderstorm, or a crisp clear night, NIMBUS bridges the gap between atmospheric science and musical mood curation.

✨ Key Features
🌦️ Dynamic Weather-to-Mood Engine:

Converts World Meteorological Organization (WMO) codes into distinct moods: Clear (Day/Night), Partly Cloudy, Overcast/Cloudy, Rain, Thunderstorm, Snow, and Fog.
Synchronizes UI themes, color palettes, and ambient backdrops with the active weather mood.
🎨 Immersive Canvas Particle Engine:

Real-time HTML5 Canvas particle system rendering dynamic environmental animations (raindrops, drifting snowflakes, thunder flashes, cloud drifts, and sun flares).
🎵 Curated Playlists & Audio Previews:

Dynamic song pool featuring 150+ tracks tailored to specific weather moods.
In-app 30-second audio preview playback, high-resolution album cover art, artist metadata, and direct streaming links to Apple Music.
📊 Comprehensive Weather Intelligence:

Real-time current conditions: temperature, "feels like", humidity, wind speed, atmospheric pressure, and UV index.
Interactive 24-hour hourly forecast strip and 7-day extended outlook.
Fast global city search powered by Open-Meteo Geocoding with automatic in-memory caching.
⚖️ Multi-City Weather Comparison:

Side-by-side comparative analysis of weather metrics, atmospheric comfort, and musical vibes across multiple cities simultaneously.
📈 Analytics & Trend Insights:

Visual metrics and interactive charts (via Recharts) displaying weather distributions and user playlist history.
⭐ Saved Locations & Favorites:

Bookmark favorite cities with quick-switch weather badges for instant access.
🎭 Interactive Demo Mood Switcher:

Floating examiner/demo controller allowing instant manual override of moods for testing all ambient themes without changing locations.
🔒 Authentication & Guest Mode:

Secure JWT authentication with bcrypt password hashing.
Includes instant Demo Login and Guest Mode for seamless exploration.

🛠️ Technology Stack

Layer	Technologies

Frontend:	React 18, Vite, Tailwind CSS, Framer Motion, Recharts, Lucide React, React Router 6, React Hot Toast

Visuals:	HTML5 Canvas Particle Engine, Glassmorphism UI

Backend:	Node.js, Express.js, Mongoose (MongoDB ODM)

Data & Cache:	Open-Meteo APIs (Forecast & Geocoding), Node-Cache (10-min TTL)

Security:	JWT (jsonwebtoken), Bcrypt.js, Helmet, Express Rate Limit, Zod validation

Testing:	Jest, Supertest, MongoMemoryServer

Dev: Tooling	Concurrently, Nodemon

🏗️ Architecture & Project Structure
text
nimbus-weather-mood-playlist/
├── client/                     # Vite + React Frontend
│   ├── src/
│   │   ├── components/         # Canvas, Home, Favorites, & Common UI components
│   │   ├── context/            # WeatherContext & AuthContext state providers
│   │   ├── pages/              # Home, Favorites, Compare, Insights, Auth
│   │   ├── services/           # Axios API services
│   │   └── utils/              # Mood mapping & UI helpers
│   └── package.json
├── server/                     # Express & Node.js Backend
│   ├── src/
│   │   ├── config/             # Database connection & configurations
│   │   ├── controllers/        # Weather, Playlist, Auth, Favorites, Stats
│   │   ├── data/               # Curated mood playlists (150+ tracks)
│   │   ├── middleware/         # Auth verification, rate limiting, error handlers
│   │   ├── models/             # User, FavoriteCity, PlaylistLog schemas
│   │   ├── routes/             # RESTful API route definitions
│   │   ├── services/           # Open-Meteo weather client & caching service
│   │   └── utils/              # Weather code to mood mapper
│   └── package.json
└── package.json                # Root scripts (concurrent client & server orchestration)



DEMO VIDEO-> https://drive.google.com/file/d/1NP79VXrC0rkAI7NtnLRRo94kI0q2Q0DD/view?usp=share_link
