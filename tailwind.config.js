/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      core:"#020043"
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['nord'],
  },
}

