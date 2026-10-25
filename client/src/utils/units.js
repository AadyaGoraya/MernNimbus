/**
 * Unit conversion utilities for temperature, wind speed, and precipitation
 */

export function toFahrenheit(celsius) {
  if (celsius === null || celsius === undefined) return 0;
  return Math.round((celsius * 9) / 5 + 32);
}

export function formatTempNumber(celsius, units = 'metric') {
  if (celsius === null || celsius === undefined || isNaN(celsius)) return '--';
  const val = units === 'imperial' ? toFahrenheit(celsius) : Math.round(celsius);
  return val;
}

export function formatTempWithUnit(celsius, units = 'metric') {
  const num = formatTempNumber(celsius, units);
  if (num === '--') return '--';
  return `${num}°${units === 'imperial' ? 'F' : 'C'}`;
}

export function formatWindSpeed(kmh, units = 'metric') {
  if (kmh === null || kmh === undefined || isNaN(kmh)) return '--';
  if (units === 'imperial') {
    const mph = Math.round(kmh * 0.621371);
    return `${mph} mph`;
  }
  return `${Math.round(kmh)} km/h`;
}

export function formatPrecipitation(mm, units = 'metric') {
  if (mm === null || mm === undefined || isNaN(mm)) return '0 mm';
  if (units === 'imperial') {
    const inches = (mm * 0.0393701).toFixed(2);
    return `${inches} in`;
  }
  return `${Number(mm).toFixed(1)} mm`;
}
