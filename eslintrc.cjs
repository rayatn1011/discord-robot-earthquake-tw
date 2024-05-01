module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    "import/newline-after-import": "error",
    "import/order": ["error", { "newlines-between": "always" }],
  },
};
