const { getWeatherForecast } = require('../src/services/weather.service');
const { weatherCache, getWeatherCacheKey } = require('../src/utils/cache');

describe('Weather Service In-Memory Cache (node-cache)', () => {
  const lat = 51.5074;
  const lon = -0.1278;
  const cacheKey = getWeatherCacheKey(lat, lon);

  beforeEach(() => {
    // Flush cache before test
    weatherCache.del(cacheKey);
  });

  afterAll(() => {
    weatherCache.flushAll();
  });

  test('fetches from Open-Meteo on first call and caches response', async () => {
    expect(weatherCache.has(cacheKey)).toBe(false);

    const firstResult = await getWeatherForecast(lat, lon);

    expect(firstResult).toBeDefined();
    expect(firstResult.current).toBeDefined();
    expect(firstResult.isFromCache).toBe(false);
    expect(firstResult.mood).toBeDefined();

    // Verify key was saved into node-cache
    expect(weatherCache.has(cacheKey)).toBe(true);
  });

  test('returns cached result with isFromCache: true on second identical request', async () => {
    // First call populates cache
    const firstCall = await getWeatherForecast(lat, lon);
    expect(firstCall.isFromCache).toBe(false);

    // Second call immediately hits node-cache
    const secondCall = await getWeatherForecast(lat, lon);
    expect(secondCall.isFromCache).toBe(true);
    expect(secondCall.latitude).toBe(firstCall.latitude);
    expect(secondCall.mood).toBe(firstCall.mood);
  });
});
