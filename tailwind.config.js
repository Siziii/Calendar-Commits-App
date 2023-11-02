/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary:"#3B3B3B",
      secondary:"#2b2b2b",
      bg1:"#222222",
      accent:"#00a6a6",
      modal: "rgba(0, 0, 0, .8)",


    },
  },
  plugins: [],
}

