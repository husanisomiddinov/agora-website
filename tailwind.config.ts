import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#8b1f1f',  // Primary brand color
          600: '#6f1919',
          700: '#5a1414',
          800: '#450f0f',
          900: '#360c0c',
        },
        neutral: {
          DEFAULT: '#F9FAFB',
          light: '#FFFFFF',
          dark: '#F3F4F6',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          tertiary: '#7A7A7A',
        }
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
