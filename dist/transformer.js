"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
    Transformer: compiles to another AST that's more friendly
*/
var transformer = function transformer(ast) {
  var processedAst = {
    body: []
  };

  while (ast.body.length > 0) {
    console.log(ast.body);
    var currentNode = ast.body.shift();

    switch (true) {
      /*
          DECLARATION
          
          Nothing to do here. just pass it to generator.
      */
      case currentNode._type === "declaration":
        processedAst.body = _toConsumableArray(processedAst.body).concat([currentNode]);
        break;
    }
  }

  return processedAst;
};

module.exports = transformer;