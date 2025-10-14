// src/styles/theme.js

const theme = {
  colors: {
    // A dark navy, almost black. The main background.
    darkBg: '#0a192f',
    // Lighter background color for elements like the navbar.
    lightBg: '#112240',

    // The primary, glowing, futuristic accent color.
    primary: '#64ffda',
    // A tint of the primary color for hover effects.
    primary_tint: 'rgba(100, 255, 218, 0.1)',

    // Brightest text color, for headings.
    textLight: '#ccd6f6',
    // Muted text color, for paragraphs.
    textMedium: '#a8b2d1',
    // Darkest text color, for less important details.
    textDark: '#8892b0',

    // Glassmorphism effect colors
    glassBg: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
    
    // Navbar background with transparency
    navBg: 'rgba(10, 25, 47, 0.85)',
  },

  fonts: {
    // A clean, modern sans-serif for body text if needed.
    sans: 'Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
    // The primary font for the futuristic/hacker feel.
    mono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
  },

  fontSizes: {
    xs: '0.75rem',  // 12px
    sm: '0.875rem', // 14px
    md: '1rem',     // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem',  // 20px
    xxl: '1.5rem',  // 24px
    h3: '2rem',     // 32px
    h2: '3rem',     // 48px
    h1: '4rem',     // 64px
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
  },

  borderRadius: '4px',

  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
};

export default theme;