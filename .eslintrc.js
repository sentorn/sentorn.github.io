module.exports = {
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  rules:{
    "linebreak-style": 0,
    "no-undef": 0,
    "no-plusplus": 0,
    "no-unused-vars": 0,
    "comma-dangle": 0,
    "eol-last": 0,
    "global-require": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-quotes": 0,
    "no-console": 0,
    "prefer-destructuring": ["error", {
      "array": true,
      "object": false,
    }]
  }
};