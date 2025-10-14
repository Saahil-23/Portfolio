// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // --- CSS VARIABLES ---
  :root {
    --dark-bg: ${({ theme }) => theme.colors.darkBg};
    --light-bg: ${({ theme }) => theme.colors.lightBg};
    --primary: ${({ theme }) => theme.colors.primary};
    --text-light: ${({ theme }) => theme.colors.textLight};
    --text-medium: ${({ theme }) => theme.colors.textMedium};
    --text-dark: ${({ theme }) => theme.colors.textDark};

    --font-sans: ${({ theme }) => theme.fonts.sans};
    --font-mono: ${({ theme }) => theme.fonts.mono};

    --fz-md: ${({ theme }) => theme.fontSizes.md};
    // ... add more font sizes if needed
  }

  // --- CSS RESET & BASE STYLES ---
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  body {
    background-color: var(--dark-bg);
    color: var(--text-medium);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--text-light);
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      color: var(--primary);
    }
  }
  
  // --- CUSTOM SCROLLBAR ---
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--dark-bg);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--text-dark);
    border: 3px solid var(--dark-bg);
    border-radius: 10px;
  }

  // --- UTILITY CLASSES ---
  .section-padding {
    padding: 100px 0;
  }
`;

export default GlobalStyles;