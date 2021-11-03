module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "script",
    requireConfigFile: false,
  },

  env: {
    browser: false,
    node: true,
  },
  plugins: ["node"],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],

  rules: {
    "no-console": 2,

    // this can be removed once the following is fixed
    // https://github.com/mysticatea/eslint-plugin-node/issues/77
    "node/no-unpublished-require": "off",
  },
};
