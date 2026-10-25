import React from 'react';

/**
 * Custom SVG Weather Icons per mood (No emojis).
 * Supports sizing, stroke colors, and atmospheric SVG vector paths.
 */
export default function WeatherIcon({ mood = 'clear-day', className = 'w-6 h-6', strokeWidth = 2 }) {
  const normalized = mood.toLowerCase();

  // 1. Clear Day (Radiant Sun)
  if (normalized === 'clear-day' || normalized === 'clear') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  }

  // 2. Clear Night (Crescent Moon + Stars)
  if (normalized === 'clear-night') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
    );
  }

  // 3. Partly Cloudy (Sun + Cloud)
  if (normalized === 'partly-cloudy') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="M20 12h2" />
        <path d="m19.07 4.93-1.41 1.41" />
        <path
          d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
          fill="currentColor"
          fillOpacity="0.25"
        />
      </svg>
    );
  }

  // 4. Overcast / Cloudy (Dense Cloud Layers)
  if (normalized === 'cloudy') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M19 13a4 4 0 0 0-4-4h-.5A5.5 5.5 0 0 0 4 14" opacity="0.6" />
      </svg>
    );
  }

  // 5. Rain (Cloud with rain streaks)
  if (normalized === 'rain') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M17.5 16H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path d="M8 19v2" />
        <path d="M12 18v3" />
        <path d="M16 19v2" />
      </svg>
    );
  }

  // 6. Thunderstorm (Cloud + Lightning Bolt)
  if (normalized === 'thunderstorm') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M17.5 15H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="m13 13-3 5h4l-2 5"
          fill="currentColor"
          fillOpacity="0.3"
        />
      </svg>
    );
  }

  // 7. Snow (Cloud with crystalline snowflakes)
  if (normalized === 'snow') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M17.5 15H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path d="M8 18h.01" strokeWidth={strokeWidth + 1} />
        <path d="M8 21h.01" strokeWidth={strokeWidth + 1} />
        <path d="M12 17h.01" strokeWidth={strokeWidth + 1} />
        <path d="M12 20h.01" strokeWidth={strokeWidth + 1} />
        <path d="M16 18h.01" strokeWidth={strokeWidth + 1} />
        <path d="M16 21h.01" strokeWidth={strokeWidth + 1} />
      </svg>
    );
  }

  // 8. Fog / Mist (Horizontal floating mist bars)
  if (normalized === 'fog') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14h16" />
        <path d="M6 18h12" />
        <path d="M8 22h8" />
        <path d="M17.5 10H9a7 7 0 1 1 6.71-7h.29" opacity="0.6" />
      </svg>
    );
  }

  // Default fallback icon
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}
