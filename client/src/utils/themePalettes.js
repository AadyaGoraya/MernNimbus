/**
 * NIMBUS Weather Mood Design System & Palettes
 * Defines CSS custom property tokens and gradient themes for all 8 weather moods.
 * All colors verified for WCAG contrast against glassmorphism overlays.
 */

export const THEME_PALETTES = {
  'clear-day': {
    name: 'Clear Day',
    bgFrom: '#FF8A1C',
    bgVia: '#FFAE33',
    bgTo: '#38BDF8',
    accent: '#FBBF24',
    accentGlow: 'rgba(251, 191, 36, 0.45)',
    glass: 'rgba(15, 23, 42, 0.42)',
    glassBorder: 'rgba(255, 255, 255, 0.22)',
    glassHover: 'rgba(255, 255, 255, 0.14)',
    text: '#FFFFFF',
    textMuted: '#E2E8F0',
    chartStroke: '#FBBF24',
    chartFill: 'rgba(251, 191, 36, 0.25)',
    badgeBg: 'rgba(251, 191, 36, 0.2)',
  },

  'clear-night': {
    name: 'Clear Night',
    bgFrom: '#05060F',
    bgVia: '#0B1030',
    bgTo: '#1B1B4B',
    accent: '#818CF8',
    accentGlow: 'rgba(129, 140, 248, 0.45)',
    glass: 'rgba(8, 12, 28, 0.58)',
    glassBorder: 'rgba(129, 140, 248, 0.25)',
    glassHover: 'rgba(129, 140, 248, 0.18)',
    text: '#FFFFFF',
    textMuted: '#94A3B8',
    chartStroke: '#818CF8',
    chartFill: 'rgba(129, 140, 248, 0.25)',
    badgeBg: 'rgba(99, 102, 241, 0.22)',
  },

  'partly-cloudy': {
    name: 'Partly Cloudy',
    bgFrom: '#0E2A47',
    bgVia: '#1E4976',
    bgTo: '#3B82F6',
    accent: '#38BDF8',
    accentGlow: 'rgba(56, 189, 248, 0.45)',
    glass: 'rgba(15, 23, 42, 0.52)',
    glassBorder: 'rgba(255, 255, 255, 0.20)',
    glassHover: 'rgba(255, 255, 255, 0.12)',
    text: '#FFFFFF',
    textMuted: '#CBD5E1',
    chartStroke: '#38BDF8',
    chartFill: 'rgba(56, 189, 248, 0.22)',
    badgeBg: 'rgba(56, 189, 248, 0.2)',
  },

  cloudy: {
    name: 'Overcast Cloud',
    bgFrom: '#1E293B',
    bgVia: '#334155',
    bgTo: '#475569',
    accent: '#94A3B8',
    accentGlow: 'rgba(148, 163, 184, 0.35)',
    glass: 'rgba(15, 23, 42, 0.62)',
    glassBorder: 'rgba(255, 255, 255, 0.16)',
    glassHover: 'rgba(255, 255, 255, 0.10)',
    text: '#F8FAFC',
    textMuted: '#94A3B8',
    chartStroke: '#CBD5E1',
    chartFill: 'rgba(203, 213, 225, 0.2)',
    badgeBg: 'rgba(148, 163, 184, 0.22)',
  },

  rain: {
    name: 'Rainy Sky',
    bgFrom: '#0B1320',
    bgVia: '#132338',
    bgTo: '#1E3A5F',
    accent: '#0284C7',
    accentGlow: 'rgba(2, 132, 199, 0.5)',
    glass: 'rgba(11, 19, 32, 0.64)',
    glassBorder: 'rgba(56, 189, 248, 0.22)',
    glassHover: 'rgba(56, 189, 248, 0.15)',
    text: '#F0F9FF',
    textMuted: '#94A3B8',
    chartStroke: '#38BDF8',
    chartFill: 'rgba(56, 189, 248, 0.25)',
    badgeBg: 'rgba(2, 132, 199, 0.25)',
  },

  thunderstorm: {
    name: 'Thunderstorm',
    bgFrom: '#080313',
    bgVia: '#16092B',
    bgTo: '#2A104E',
    accent: '#C084FC',
    accentGlow: 'rgba(192, 132, 252, 0.55)',
    glass: 'rgba(10, 4, 20, 0.68)',
    glassBorder: 'rgba(192, 132, 252, 0.26)',
    glassHover: 'rgba(192, 132, 252, 0.18)',
    text: '#FAF5FF',
    textMuted: '#C084FC',
    chartStroke: '#C084FC',
    chartFill: 'rgba(192, 132, 252, 0.25)',
    badgeBg: 'rgba(168, 85, 247, 0.25)',
  },

  snow: {
    name: 'Snowfall',
    bgFrom: '#0B192C',
    bgVia: '#1B314F',
    bgTo: '#2E4C72',
    accent: '#67E8F9',
    accentGlow: 'rgba(103, 232, 249, 0.45)',
    glass: 'rgba(11, 25, 44, 0.58)',
    glassBorder: 'rgba(103, 232, 249, 0.24)',
    glassHover: 'rgba(103, 232, 249, 0.15)',
    text: '#F0FDFF',
    textMuted: '#A5F3FC',
    chartStroke: '#67E8F9',
    chartFill: 'rgba(103, 232, 249, 0.22)',
    badgeBg: 'rgba(103, 232, 249, 0.2)',
  },

  fog: {
    name: 'Mist & Fog',
    bgFrom: '#1A202C',
    bgVia: '#2D3748',
    bgTo: '#4A5568',
    accent: '#E2E8F0',
    accentGlow: 'rgba(226, 232, 240, 0.35)',
    glass: 'rgba(26, 32, 44, 0.62)',
    glassBorder: 'rgba(255, 255, 255, 0.18)',
    glassHover: 'rgba(255, 255, 255, 0.12)',
    text: '#F7FAFC',
    textMuted: '#CBD5E0',
    chartStroke: '#E2E8F0',
    chartFill: 'rgba(226, 232, 240, 0.2)',
    badgeBg: 'rgba(226, 232, 240, 0.18)',
  },
};

/**
 * Apply CSS variables to root document element smoothly
 * @param {string} mood
 */
export function applyThemeVariables(mood) {
  const normalizedKey = THEME_PALETTES[mood] ? mood : 'clear-day';
  const palette = THEME_PALETTES[normalizedKey];
  const root = document.documentElement;

  root.style.setProperty('--bg-from', palette.bgFrom);
  root.style.setProperty('--bg-via', palette.bgVia);
  root.style.setProperty('--bg-to', palette.bgTo);
  root.style.setProperty('--accent', palette.accent);
  root.style.setProperty('--accent-glow', palette.accentGlow);
  root.style.setProperty('--glass', palette.glass);
  root.style.setProperty('--glass-border', palette.glassBorder);
  root.style.setProperty('--glass-hover', palette.glassHover);
  root.style.setProperty('--text', palette.text);
  root.style.setProperty('--text-muted', palette.textMuted);
  root.style.setProperty('--chart-stroke', palette.chartStroke);
  root.style.setProperty('--chart-fill', palette.chartFill);
  root.style.setProperty('--badge-bg', palette.badgeBg);
}
