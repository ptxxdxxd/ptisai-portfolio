/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Black, Salmon, Seafoam Theme
        'background': {
          'page': '#0A0A0A',
          'surface': '#1A1A1A',
        },
        'border': {
          'subtle': '#333333',
        },
        'text': {
          'primary': '#F5F5F5',
          'secondary': '#B0B0B0',
          'interactive': '#FFFFFF',
        },
        'primary': {
          'accent': '#FA8072',
          'accent-light': '#FCA5A5',
          'accent-dark': '#F87171',
        },
        'secondary': {
          'accent': '#93E9BE',
          'accent-light': '#A7F3D0',
          'accent-dark': '#10B981',
        },
        'semantic': {
          'success': '#93E9BE',
          'warning': '#FCA5A5',
          'error': '#F87171',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'xxxl': '96px',
      },
      borderRadius: {
        'md': '8px',
        'lg': '12px',
        'full': '9999px',
      },
      boxShadow: {
        'glow': '0 0 24px 0 rgba(250, 128, 114, 0.15)',
        'glow-secondary': '0 0 24px 0 rgba(147, 233, 190, 0.15)',
        'card': '0 8px 24px -4px rgba(250, 128, 114, 0.12)',
        'card-secondary': '0 8px 24px -4px rgba(147, 233, 190, 0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}