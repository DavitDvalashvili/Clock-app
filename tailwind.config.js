/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-daytime": "url('../public/assets/mobile/bg-image-daytime.jpg')",
        "mobile-nighttime": "url('../public/assets/mobile/bg-image-nighttime.jpg')",
        "tablet-daytime": "url('../public/assets/tablet/bg-image-daytime.jpg')",
        "tablet-nighttime": "url('../public/assets/tablet/bg-image-nighttime.jpg')",
        "desktop-daytime": "url('../public/assets/desktop/bg-image-daytime.jpg')",
        "desktop-nighttime": "url('../public/assets/desktop/bg-image-nighttime.jpg')",
      },
      fontFamily: {
        fontInter: ["Inter"]
      }
    },
  },
};
