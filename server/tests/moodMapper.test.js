const { mapWeatherCodeToMood } = require('../src/utils/weatherMoodMapper');

describe('WMO Code to Nimbus Mood Mapper', () => {
  test('maps code 0 to clear-day when is_day is 1', () => {
    const result = mapWeatherCodeToMood(0, 1);
    expect(result.baseMood).toBe('clear');
    expect(result.mood).toBe('clear-day');
    expect(result.description).toBe('Clear Sky');
  });

  test('maps code 0 to clear-night when is_day is 0', () => {
    const result = mapWeatherCodeToMood(0, 0);
    expect(result.baseMood).toBe('clear');
    expect(result.mood).toBe('clear-night');
  });

  test('maps code 2 to partly-cloudy', () => {
    const result = mapWeatherCodeToMood(2, 1);
    expect(result.baseMood).toBe('partly-cloudy');
    expect(result.mood).toBe('partly-cloudy');
  });

  test('maps code 3 to cloudy', () => {
    const result = mapWeatherCodeToMood(3, 1);
    expect(result.baseMood).toBe('cloudy');
    expect(result.mood).toBe('cloudy');
    expect(result.description).toBe('Overcast');
  });

  test('maps code 45 and 48 to fog', () => {
    expect(mapWeatherCodeToMood(45, 1).mood).toBe('fog');
    expect(mapWeatherCodeToMood(48, 1).mood).toBe('fog');
  });

  test('maps rain codes (51, 61, 63, 65, 80, 81, 82) to rain', () => {
    [51, 61, 63, 65, 80, 81, 82].forEach((code) => {
      const res = mapWeatherCodeToMood(code, 1);
      expect(res.baseMood).toBe('rain');
    });
  });

  test('maps snow codes (71, 73, 75, 85, 86) to snow', () => {
    [71, 73, 75, 85, 86].forEach((code) => {
      const res = mapWeatherCodeToMood(code, 1);
      expect(res.baseMood).toBe('snow');
    });
  });

  test('maps thunderstorm codes (95, 96, 99) to thunderstorm', () => {
    [95, 96, 99].forEach((code) => {
      const res = mapWeatherCodeToMood(code, 1);
      expect(res.baseMood).toBe('thunderstorm');
    });
  });

  test('falls back to cloudy for unknown weather code', () => {
    const res = mapWeatherCodeToMood(999, 1);
    expect(res.baseMood).toBe('cloudy');
  });
});
