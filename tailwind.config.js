const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 폰트 설정
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },

      // 커스텀 색상
      colors: {
        "mine-gray-1": "#dadce0",
        "mine-blue-1": "#1967d2",
        "mine-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
