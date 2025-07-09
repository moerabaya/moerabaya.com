import react from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {
    extends: ["next", "next/core-web-vitals", "prettier"],
    plugins: {
      react: react,
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];
