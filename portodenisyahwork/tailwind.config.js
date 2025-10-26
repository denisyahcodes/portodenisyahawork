/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          purple: "#7B2FF7",
          blue: "#22D3EE",
          dark: "#0B0C10"
        }
      },
      backgroundImage: {
        "aurora":
          "radial-gradient(circle at 20% 20%, rgba(123,47,247,0.2), transparent 40%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.2), transparent 40%)"
      },
      backdropBlur: {
        xs: "2px"
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)"
      },
      animation: {
        aurora: "auroraMove 10s ease-in-out infinite alternate"
      },
      keyframes: {
        auroraMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      }
    }
  },
  plugins: []
};
