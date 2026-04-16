/**
 * Piga Padel brand color tokens.
 * These are the source of truth for all apps (web, mobile, etc.).
 * CSS consumers: reference the CSS variables defined in globals.css.
 * JS/TS consumers (e.g. React Native): import directly from here.
 */

export const colors = {
  brand: {
    /** Primary lime green — CTAs, highlights */
    primary: '#6bbf00',
    primaryHover: '#5da800',
    /** Light lime — decorative accents */
    primaryLight: '#b5d96e',
    /** Sage green — page background */
    background: '#dfe8cc',
    /** Darker sage — left panel, image frames */
    backgroundPanel: '#c8d9a0',
  },

  neutral: {
    white: '#ffffff',
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  /** Used for social login buttons */
  social: {
    google: '#4285F4',
    facebook: '#1877F2',
  },
} as const;

export type Colors = typeof colors;
