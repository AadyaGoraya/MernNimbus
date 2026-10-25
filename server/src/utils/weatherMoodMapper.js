/**
 * WMO Weather Code to Nimbus Mood Mapper
 * Maps standard World Meteorological Organization (WMO) weather codes
 * into the 7 core atmospheric moods, enhanced with day/night variations:
 * 1. clear (clear-day, clear-night)
 * 2. partly-cloudy (partly-cloudy-day, partly-cloudy-night)
 * 3. cloudy
 * 4. rain
 * 5. thunderstorm
 * 6. snow
 * 7. fog
 */

const WMO_CODE_MAP = {
  // Clear
  0: { mood: 'clear', description: 'Clear Sky' },
  1: { mood: 'clear', description: 'Mainly Clear' },

  // Partly Cloudy
  2: { mood: 'partly-cloudy', description: 'Partly Cloudy' },

  // Overcast / Cloudy
  3: { mood: 'cloudy', description: 'Overcast' },

  // Fog
  45: { mood: 'fog', description: 'Fog' },
  48: { mood: 'fog', description: 'Depositing Rime Fog' },

  // Drizzle / Rain
  51: { mood: 'rain', description: 'Light Drizzle' },
  53: { mood: 'rain', description: 'Moderate Drizzle' },
  55: { mood: 'rain', description: 'Dense Drizzle' },
  56: { mood: 'snow', description: 'Light Freezing Drizzle' },
  57: { mood: 'snow', description: 'Dense Freezing Drizzle' },
  61: { mood: 'rain', description: 'Slight Rain' },
  63: { mood: 'rain', description: 'Moderate Rain' },
  65: { mood: 'rain', description: 'Heavy Rain' },
  66: { mood: 'snow', description: 'Light Freezing Rain' },
  67: { mood: 'snow', description: 'Heavy Freezing Rain' },
  80: { mood: 'rain', description: 'Slight Rain Showers' },
  81: { mood: 'rain', description: 'Moderate Rain Showers' },
  82: { mood: 'rain', description: 'Violent Rain Showers' },

  // Snow
  71: { mood: 'snow', description: 'Slight Snow Fall' },
  73: { mood: 'snow', description: 'Moderate Snow Fall' },
  75: { mood: 'snow', description: 'Heavy Snow Fall' },
  77: { mood: 'snow', description: 'Snow Grains' },
  85: { mood: 'snow', description: 'Slight Snow Showers' },
  86: { mood: 'snow', description: 'Heavy Snow Showers' },

  // Thunderstorm
  95: { mood: 'thunderstorm', description: 'Thunderstorm' },
  96: { mood: 'thunderstorm', description: 'Thunderstorm with Slight Hail' },
  99: { mood: 'thunderstorm', description: 'Thunderstorm with Heavy Hail' },
};

/**
 * Resolves WMO code and day/night flag into app mood
 * @param {number} code - WMO weather code (0-99)
 * @param {number|boolean} isDay - 1/true for day, 0/false for night
 * @returns {{ baseMood: string, mood: string, description: string }}
 */
function mapWeatherCodeToMood(code, isDay = 1) {
  const numericCode = Number(code);
  const isDaytime = Boolean(Number(isDay));

  const entry = WMO_CODE_MAP[numericCode] || {
    mood: 'cloudy',
    description: 'Cloudy Sky',
  };

  const baseMood = entry.mood;
  let mood = baseMood;

  // Day/Night variants
  if (baseMood === 'clear') {
    mood = isDaytime ? 'clear-day' : 'clear-night';
  } else if (baseMood === 'partly-cloudy') {
    mood = isDaytime ? 'partly-cloudy' : 'clear-night'; // night partly cloudy shares deep star-cloud night vibe or partly-cloudy
  }

  return {
    baseMood,
    mood,
    description: entry.description,
  };
}

module.exports = {
  WMO_CODE_MAP,
  mapWeatherCodeToMood,
};
