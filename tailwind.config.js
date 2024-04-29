/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "var(--red)",
        gray: "var(--gray)",
        purple: "var(--purple)",
        yellow: "var(--yellow)",
        green: "var(--green)",
      },
    },
  },
  plugins: [],
};
