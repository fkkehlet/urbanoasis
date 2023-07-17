/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['modelica', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      transitionDelay: {},
    },
  },
  safelist: [],
};
