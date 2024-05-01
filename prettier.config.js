/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  trailingComma: "es5",
  plugins: ["./node_modules/prettier-plugin-jsdoc/dist/index.js"],
};
