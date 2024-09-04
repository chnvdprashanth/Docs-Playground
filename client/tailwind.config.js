/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'dashboardPanel' : '#172554',
      },
      height: {
        '1/8': '12.5%', // 1/6 of the container height
        '7/8': '87.5%', // 5/6 of the container height
      },
    },
  },
  plugins: [],
}

