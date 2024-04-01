/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./projects/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '60vh': '65vh',
        '65vh': '65vh',
      }
    },
    fontFamily: {
      "mono": '"Fira Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
    }
  },
  plugins: [],
};
