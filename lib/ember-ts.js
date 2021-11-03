module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  plugins: ["ember", "ember-es6-class", "unused-imports"],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:ember/recommended",
    "plugin:prettier/recommended",
  ],

  env: {
    browser: true,
  },

  rules: {
    ...require("./ember-rules"),

    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
  },
};
