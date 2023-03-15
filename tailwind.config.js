/** @type {import('tailwindcss').Config} */
module.exports = {
  // added from tailwind
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // added font family
    fontFamily: {
      signature: ["Great Vibes"],
    }
    
  },
  plugins: [],
};
