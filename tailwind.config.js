/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary:"#333333",
      secondary:"#232323",
      bg1:"#111111",
      accent:"#00a6a6",
      modal: "rgba(0, 0, 0, .6)",


    },
  },
  plugins: [],
}

