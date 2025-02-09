/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        my_header: '60px',
        my_body: "calc(100vh - 60px)"
      },
      minHeight: {
        my_body: "calc(100vh - 60px)"
      }
    },
  },
  plugins: [],
}

