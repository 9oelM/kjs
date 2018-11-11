"use strict";

var kpop = require("kpop");

var generator = function generator(processedAst) {
  var codes = processedAst.body.map(function (each) {
    if (each._type === "declaration") {
      return "".concat(each._command, " ").concat(kpop.romanize(each._variableName), " ").concat(each._operator, " ").concat(each._argument);
    }
  });
  return codes.join('\n');
};

module.exports = generator;