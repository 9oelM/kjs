const airbnb = require("eslint-config-airbnb")


const off = 0;
const warn = 1;
const error = 2;

module.exports = Object.assign({}, airbnb, {
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "no-unused-expressions": off,
        "no-unused-vars": warn,
        "implicit-arrow-linebreak": off,
        "no-undef": off,
        "no-extra-semi": error,
        "semi": off,
        "comma-dangle": off,
        "no-new": warn,
        "quotes": ["error", "double"],
        "no-underscore-dangle": off,
        "operator-linebreak": off,
        "arrow-parens": off,
        "class-methods-use-this": warn,
        "no-multi-assign": warn,
        "arrow-body-style": warn,
      },
      "globals": {
        "document": true
      }
    }
  ]
})