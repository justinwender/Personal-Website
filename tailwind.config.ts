import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark theme color palette
        primary: {
          green: {
            light: '#6EE7B7',
            DEFAULT: '#4ADE80',
            dark: '#10B981',
          },
          purple: {
            light: '#A78BFA',
            DEFAULT: '#818CF8',
            blue: '#3B82F6',
          }
        },
        text: {
          primary: '#F9FAFB',      // Light text for dark background
          secondary: '#D1D5DB',     // Lighter gray for secondary text
        },
        background: {
          DEFAULT: '#0F172A',       // Dark slate background
          dark: '#020617',          // Darker slate for cards/sections
          card: '#1E293B',          // Slate 800 for card backgrounds
        },
        border: {
          DEFAULT: '#334155',       // Slate 700 for borders
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        // 8px grid system
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
    },
  },
  plugins: [],
};

export default config;
