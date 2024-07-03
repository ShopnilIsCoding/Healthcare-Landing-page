/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      core:"#020043",
      sub:"#4D4C7B"
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['nord'],
  },
}

