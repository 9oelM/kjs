"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
    Parser: makes a 'map' for the code. The map would be the AST
*/

/*
    For 만들어, 확실한걸만들어, 헷갈리는걸만들어
*/
function declaration(cToken, tokens, command, AST) {
  var variableName = cToken.variableName,
      operator = cToken.operator,
      argument = cToken.argument;
  return {
    _type: "declaration",
    _command: command,
    _variableName: variableName,
    _operator: operator,
    _argument: argument
  };
}

function parser(tokens) {
  var AST = {
    type: "Not set",
    body: []
  }; // extract a token at a time as current_token. Loop until we are out of tokens.

  while (tokens.length > 0) {
    var current_token = tokens.shift(); // Since number token does not do anything by it self, we only analyze syntax when we find a word.

    switch (current_token.value) {
      /*
            만들어
        */
      case "만들어":
        var _type = void 0,
            _command = void 0,
            _variableName = void 0,
            _operator = void 0,
            _argument = void 0;
        /*
          
            first sure things
          
          */


        _type = "declaration";
        _command = "let"; // if current token is 만들어, next token should be the name of a variable

        var variableName = tokens.shift();

        if (variableName.type === "variableName") {
          _variableName = variableName.value;
        } else {
          throw "The next token of 만들어 should be the name of a variable.";
        } // the next token of a name of a variable should be an operator


        var operator = tokens.shift();

        if (operator.type === "operator") {
          _operator = operator.value;
        } else {
          throw "The next token of a name of a variable should be an operator.";
        } // the next token of an operator should be the value of a variable


        var argument = tokens.shift();

        if (argument.type === "number") {
          _argument = argument.value;
        } else {
          throw "The next token of an operator should be the value of a variable";
        }

        AST.body = _toConsumableArray(AST.body).concat([{
          _type: _type,
          _command: _command,
          _variableName: _variableName,
          _operator: _operator,
          _argument: _argument
        }]); // push the expression object to body of our AST

        AST.type = "declaration";
        break;

      /*
            확실한걸만들어
        */

      case "확실한걸만들어":
    }
  }

  return AST;
}

module.exports = parser;