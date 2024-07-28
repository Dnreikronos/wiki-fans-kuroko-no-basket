/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    fontFamily: {
      'projectFont': ['lato'],
    },

    extend: {
      backgroundImage: {
        'background-kuroko': "url('/assets/kuroko-no-basket.jpg')",
        'background-404': "url('/assets/404-background.png')"
      }
    },
  },
  plugins: [],
};
