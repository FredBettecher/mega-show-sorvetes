/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0', scale: '1', transformOrigin: 'center center' },
          '50%': { opacity: '1', scale: '1.1', transformOrigin: 'center center' },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
