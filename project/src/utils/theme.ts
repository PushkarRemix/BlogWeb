// Theme types
export type Theme = 'light' | 'dark';

// Check if dark mode is preferred
export function getPreferredTheme(): Theme {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

// Get current theme
export function getStoredTheme(): Theme {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') as Theme || getPreferredTheme();
  }
  return 'light';
}

// Apply theme to document
export function applyTheme(theme: Theme) {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
}