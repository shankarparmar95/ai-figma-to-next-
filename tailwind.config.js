// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // You can customize the color palette here based on the design
          blue: {
            700: '#0056aa', // Main button color from design
            800: '#004b94', // Darker hover state
          },
        },
        fontFamily: {
          sans: ['Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }