/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{js,jsx,ts,tsx}"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        text: {
          primary:'#ed787a'
        }
      },
    },
  },
  plugins: [],
};
