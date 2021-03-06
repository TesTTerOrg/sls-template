module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended", "prettier/standard"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
};
