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
        // Custom color palette based on planning document
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
          primary: '#111827',
          secondary: '#6B7280',
        },
        background: {
          DEFAULT: '#FFFFFF',
          gray: '#F8F9FA',
        },
        border: {
          DEFAULT: '#E5E7EB',
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
