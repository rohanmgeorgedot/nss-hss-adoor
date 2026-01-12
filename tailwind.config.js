/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "5vw": "5vw",
      },
      height: {
        "100vh": "100vh",
      },
      colors: {
        // Orange & White Color Scheme
        primary: {
          DEFAULT: "#FF7D29",
          50: "#fff6ed",
          100: "#ffebd4",
          200: "#ffd2a8",
          300: "#ffb271",
          400: "#ff7d29",
          500: "#fe6411",
          600: "#ef4a07",
          700: "#c63408",
          800: "#9d2b0f",
          900: "#7e2610",
          950: "#440f06",
        },
        secondary: "#FFBF78",
        accent: "#FF7D29",
        "font-primary": "#1a1a1a",
        "font-secondary": "#4a4a4a",
        "font-muted": "#717171",
        white: "#ffffff",
        "white-shade": "#fafafa",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        custom: "0px 8px 24px rgba(0, 0, 0, 0.08)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
