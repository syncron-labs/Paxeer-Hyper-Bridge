/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-main)'],
      serif: ['Garamond', 'serif'],
      mono: ['Courier New', 'monospace'],
    },
    screens: {
      all: '1px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        black: '#010101',
        white: '#ffffff',
        gray: { 
          ...defaultColors.gray, 
          '150': '#EBEDF0', 
          '250': '#404040', 
          '350': '#6B6B6B',
          '750': '#1a1a1a',
          '850': '#0d0d0d',
        },
        primary: {
          50: '#e6f5ff',
          100: '#ccebff',
          200: '#99d7ff',
          300: '#66c3ff',
          400: '#35b7ff',
          500: '#35b7ff',
          600: '#2a92cc',
          700: '#206e99',
          800: '#154966',
          900: '#0b2533',
        },
        accent: {
          50: '#74f05a',
          100: '#74f05a',
          200: '#74f05a',
          300: '#74f05a',
          400: '#74f05a',
          500: '#74f05a',
          600: '#74f05a',
          700: '#74f05a',
          800: '#74f05a',
          900: '#74f05a',
        },
        white: {
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
        },
        green: {
          50: '#74f05a',
          100: '#74f05a',
          200: '#74f05a',
          300: '#74f05a',
          400: '#74f05a',
          500: '#74f05a',
          600: '#236A45',
          700: '#1F5E3D',
          800: '#17462E',
          900: '#0F2F1E',
        },
      },
      fontSize: {
        xxs: '0.7rem',
        xs: '0.775rem',
        sm: '0.85rem',
        md: '0.95rem',
      },
      spacing: {
        88: '22rem',
        100: '26rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.20rem',
        DEFAULT: '0.30rem',
        md: '0.40rem',
        lg: '0.50rem',
        full: '9999px',
      },
      blur: {
        xs: '3px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      transitionProperty: {
        height: 'height, max-height',
        spacing: 'margin, padding',
      },
      maxWidth: {
        'xl-1': '39.5rem',
      },
    },
  },
  plugins: [],
};
