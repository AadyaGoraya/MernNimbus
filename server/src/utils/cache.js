const NodeCache = require('node-cache');

/**
 * WHY in-memory caching with node-cache:
 * 1. Rate Limiting Protection: Third-party weather APIs (like Open-Meteo) have fair-use rate limits.
 *    Caching frequent queries prevents hitting 429 Too Many Requests.
 * 2. High Performance / Sub-millisecond latency: Repeated requests for the same city or coordinates
 *    can be served in < 2ms directly from RAM instead of making an outbound HTTP roundtrip (~150-500ms).
 * 3. Provider Abstraction / Fault Tolerance: Central caching allows serving the last known good weather
 *    forecast even if the upstream provider experiences brief outages or latency spikes.
 * 4. Coordinate Normalization: By rounding latitude and longitude to 2 decimal places (~1.1 km precision),
 *    nearby user searches share the exact same cache bucket.
 */
const weatherCache = new NodeCache({
  stdTTL: 600, // 10 minutes TTL in seconds
  checkperiod: 120, // check for expired keys every 2 minutes
  useClones: false,
});

/**
 * Generate normalized cache key from latitude and longitude rounded to 2 decimal places
 * @param {number|string} lat
 * @param {number|string} lon
 * @returns {string}
 */
function getWeatherCacheKey(lat, lon) {
  const roundedLat = Number(lat).toFixed(2);
  const roundedLon = Number(lon).toFixed(2);
  return `weather:${roundedLat}:${roundedLon}`;
}

/**
 * Generate cache key for geocoding search queries
 * @param {string} query
 * @returns {string}
 */
function getSearchCacheKey(query) {
  return `geocode:${query.trim().toLowerCase()}`;
}

module.exports = {
  weatherCache,
  getWeatherCacheKey,
  getSearchCacheKey,
};
