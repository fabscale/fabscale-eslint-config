# fabscale-eslint-config

## Installation

```
yarn add fabscale-eslint-config --dev --tilde
```

## Usage

In your `eslintrc.js` file:

```js
module.exports = {
  root: true,
  ...require("fabscale-eslint-config/lib/ember"),

  overrides: [
    // .ts files
    {
      parser: "@typescript-eslint/parser",
      files: ["**/*.ts"],
      ...require("fabscale-eslint-config/lib/ember-ts"),
    },

    // node files
    {
      files: [
        "./*.js",
        "./blueprints/*/index.js",
        "./config/**/*.js",
        "./tests/dummy/config/**/*.js",
      ],
      ...require("fabscale-eslint-config/lib/node"),
    },
    {
      // test files:
      files: ["tests/**/*-test.{js,ts}"],
      ...require("fabscale-eslint-config/lib/ember-tests"),
    },
  ],
};
```

The following config options are available:

- `fabscale-eslint-config/lib/ember`
- `fabscale-eslint-config/lib/ember-ts`
- `fabscale-eslint-config/lib/ember-tests`
- `fabscale-eslint-config/lib/ember-tests-ts`
- `fabscale-eslint-config/lib/node`

You can also extend them as needed, e.g. like this:

```js
module.exports = {
  root: true,
  ...Object.assign(require("fabscale-eslint-config/lib/ember"), {
    rules: {
      // your custom rules here
    },
  }),
};
```
