const { weatherCache, getWeatherCacheKey, getSearchCacheKey } = require('../utils/cache');
const { mapWeatherCodeToMood } = require('../utils/weatherMoodMapper');
const AppError = require('../utils/appError');

/**
 * Search cities using Open-Meteo Geocoding API with 10-minute caching
 * @param {string} query
 * @returns {Promise<Array>}
 */
async function searchCities(query) {
  const cacheKey = getSearchCacheKey(query);
  const cached = weatherCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query
  )}&count=10&language=en&format=json`;

  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'NimbusWeatherMood/1.0' } });
    if (!response.ok) {
      throw new Error(`Geocoding API responded with HTTP ${response.status}`);
    }

    const data = await response.json();
    const results = (data.results || []).map((item) => ({
      id: item.id,
      name: item.name,
      country: item.country || '',
      admin1: item.admin1 || '',
      lat: item.latitude,
      lon: item.longitude,
      timezone: item.timezone || 'auto',
      countryCode: item.country_code || '',
    }));

    // Cache successful search results for 10 minutes
    weatherCache.set(cacheKey, results);
    return results;
  } catch (err) {
    // If upstream geocoding fails, check if we have any stale cache
    if (cached) return cached;
    throw new AppError(
      'Unable to reach weather geocoding service. Please try again in a moment.',
      503
    );
  }
}

/**
 * Fetch and normalize weather forecast from Open-Meteo
 * Caches normalized results in node-cache for 10 minutes keyed by rounded coordinates.
 * @param {number} lat
 * @param {number} lon
 * @returns {Promise<object>}
 */
async function getWeatherForecast(lat, lon) {
  const cacheKey = getWeatherCacheKey(lat, lon);
  const cached = weatherCache.get(cacheKey);

  if (cached) {
    return { ...cached, isFromCache: true };
  }

  const endpoint = new URL('https://api.open-meteo.com/v1/forecast');
  endpoint.searchParams.set('latitude', Number(lat).toFixed(4));
  endpoint.searchParams.set('longitude', Number(lon).toFixed(4));
  endpoint.searchParams.set(
    'current',
    'temperature_2m,apparent_temperature,relative_humidity_2m,is_day,weather_code,wind_speed_10m,precipitation'
  );
  endpoint.searchParams.set(
    'hourly',
    'temperature_2m,precipitation_probability,weather_code'
  );
  endpoint.searchParams.set(
    'daily',
    'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset'
  );
  endpoint.searchParams.set('timezone', 'auto');
  endpoint.searchParams.set('forecast_days', '7');

  let rawData;
  try {
    const response = await fetch(endpoint.toString(), {
      headers: { 'User-Agent': 'NimbusWeatherMood/1.0' },
    });

    if (!response.ok) {
      throw new Error(`Open-Meteo returned status ${response.status}`);
    }
    rawData = await response.json();
  } catch (fetchErr) {
    // Graceful degradation: return last cached data if available even if TTL elapsed (backup map)
    if (weatherCache.get(`stale:${cacheKey}`)) {
      return {
        ...weatherCache.get(`stale:${cacheKey}`),
        isStaleFallback: true,
      };
    }
    throw new AppError(
      'Weather service is temporarily unavailable. Please try again shortly.',
      503
    );
  }

  // Parse and normalize Current conditions
  const cur = rawData.current || {};
  const isDay = cur.is_day !== undefined ? cur.is_day : 1;
  const weatherCode = cur.weather_code !== undefined ? cur.weather_code : 0;
  const moodData = mapWeatherCodeToMood(weatherCode, isDay);

  const current = {
    time: cur.time,
    temperature: cur.temperature_2m,
    apparentTemperature: cur.apparent_temperature,
    humidity: cur.relative_humidity_2m,
    isDay: Boolean(isDay),
    weatherCode,
    windSpeed: cur.wind_speed_10m,
    precipitation: cur.precipitation,
    mood: moodData.mood,
    baseMood: moodData.baseMood,
    description: moodData.description,
  };

  // Parse and normalize next 24 hours
  const hourlyRaw = rawData.hourly || {};
  const hourlyTimes = hourlyRaw.time || [];
  const hourlyTemps = hourlyRaw.temperature_2m || [];
  const hourlyPrecip = hourlyRaw.precipitation_probability || [];
  const hourlyCodes = hourlyRaw.weather_code || [];

  // Find index closest to current time
  const nowIso = new Date().toISOString().slice(0, 13); // YYYY-MM-DDTHH
  let startIndex = hourlyTimes.findIndex((t) => t.startsWith(nowIso));
  if (startIndex === -1) startIndex = 0;

  const hourly = [];
  for (let i = startIndex; i < Math.min(startIndex + 24, hourlyTimes.length); i++) {
    const hourTime = hourlyTimes[i];
    const code = hourlyCodes[i] || 0;
    // Estimate day/night for hourly based on hour (roughly 6am to 8pm) or current sunrise/sunset
    const hourNumber = new Date(hourTime).getHours();
    const isDayHour = hourNumber >= 6 && hourNumber < 20 ? 1 : 0;
    const hourMood = mapWeatherCodeToMood(code, isDayHour);

    hourly.push({
      time: hourTime,
      hour: new Date(hourTime).toLocaleTimeString([], { hour: 'numeric', hour12: true }),
      temperature: hourlyTemps[i],
      precipitationProbability: hourlyPrecip[i] || 0,
      weatherCode: code,
      mood: hourMood.mood,
      baseMood: hourMood.baseMood,
      description: hourMood.description,
    });
  }

  // Parse and normalize 7-day forecast
  const dailyRaw = rawData.daily || {};
  const dailyTimes = dailyRaw.time || [];
  const dailyCodes = dailyRaw.weather_code || [];
  const dailyMax = dailyRaw.temperature_2m_max || [];
  const dailyMin = dailyRaw.temperature_2m_min || [];
  const dailySunrise = dailyRaw.sunrise || [];
  const dailySunset = dailyRaw.sunset || [];

  const daily = dailyTimes.map((dateStr, index) => {
    const code = dailyCodes[index] || 0;
    const dayMood = mapWeatherCodeToMood(code, 1);
    const dateObj = new Date(dateStr + 'T00:00:00');
    const dayOfWeek = index === 0 ? 'Today' : dateObj.toLocaleDateString('en-US', { weekday: 'short' });

    return {
      date: dateStr,
      dayOfWeek,
      weatherCode: code,
      mood: dayMood.mood,
      baseMood: dayMood.baseMood,
      description: dayMood.description,
      tempMax: dailyMax[index],
      tempMin: dailyMin[index],
      sunrise: dailySunrise[index],
      sunset: dailySunset[index],
    };
  });

  const normalized = {
    latitude: rawData.latitude,
    longitude: rawData.longitude,
    elevation: rawData.elevation,
    timezone: rawData.timezone,
    timezoneAbbreviation: rawData.timezone_abbreviation,
    utcOffsetSeconds: rawData.utc_offset_seconds,
    current,
    hourly,
    daily,
    mood: current.mood, // Primary app driving mood
    cachedAt: new Date().toISOString(),
  };

  // Cache response for 10 minutes
  weatherCache.set(cacheKey, normalized);
  // Also store in stale cache without TTL for emergency fallback
  weatherCache.set(`stale:${cacheKey}`, normalized, 86400);

  return { ...normalized, isFromCache: false };
}

module.exports = {
  searchCities,
  getWeatherForecast,
};
