module.exports = {
  "extends": ["airbnb-base", "plugin:react/recommended"],
  presets: ["es2015", "react"],
  parser: "babel-eslint",
  rules:{
    "prop-types": [2],
    "linebreak-style": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "comma-dangle": 0,
    "eol-last": 0,
    "global-require": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-quotes": 0,
    "no-console": 0
  }
};