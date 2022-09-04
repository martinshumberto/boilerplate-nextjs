/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    require('tailwindcss-radix')({
      variantPrefix: 'rdx',
    }),
    require('prettier-plugin-tailwindcss'),
  ],
}
