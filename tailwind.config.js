const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{html,njk}"],
    darkMode: 'selector',
    theme: {
        fontFamily: {
          display: ['Noto Serif', 'Georgia', 'serif'],
          title: ['Noto Sans', 'sans']
        },
    },
    plugins: [],
  };