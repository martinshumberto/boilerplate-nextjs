/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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
