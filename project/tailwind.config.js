/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fedex: {
          purple: '#4D148C',
          orange: '#FF6600',
          gray: '#6C6C6C',
        },
      },
    },
  },
  plugins: [],
}
