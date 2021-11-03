module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        "@babel/plugin-proposal-class-properties",
        ["@babel/plugin-syntax-decorators", { legacy: true }],
      ],
    },
  },

  plugins: ["ember", "ember-es6-class" ,"unused-imports"],

  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:prettier/recommended",
  ],

  env: {
    browser: true,
  },

  rules: require("./ember-rules"),
};
