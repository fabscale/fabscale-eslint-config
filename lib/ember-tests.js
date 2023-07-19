module.exports = {
  extends: ["plugin:qunit/recommended"],
  rules: {
    "qunit/require-expect": 0,
    "no-curly-component-invocation": { allow: ['layout-css-var'] }
  },
};
