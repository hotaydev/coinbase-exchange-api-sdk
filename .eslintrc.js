module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    complexity: ["error", 5],
    curly: ["error", "all"],
    eqeqeq: "error",
    "max-lines": [
      "error",
      { max: 100, skipBlankLines: true, skipComments: true },
    ],
    "max-nested-callbacks": ["error", 3],
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-nested-ternary": "error",
    "no-param-reassign": "error",
    "no-script-url": "error",
    "no-unneeded-ternary": "error",
    "no-var": "error",
    "prefer-const": "error",
    "sort-imports": "error",
  },
};
