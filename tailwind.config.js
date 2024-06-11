/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      textColor: {
        inherit: "inherit",
      },
      textDecoration: {
        inherit: "inherit",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
