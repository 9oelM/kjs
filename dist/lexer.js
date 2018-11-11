/**
 * Class Token
 * Represents a token.
 */
class Token {
  /**
   * Create a token.
   * @param {string} type - the type of a token.
   * @param {string} type - the value of a token (it is regarded as a string)
   * @param {Object} location - the starting and ending point of the code.
   * @param {Object} location.start - the line and column of the starting point
   * @param {Object} location.end - the line and column of the ending point
   */
  constructor(type, value, location) {
    this.type = type
    this.value = value
    this.location = location
  }
}
/**
 * Class Lexer
 * Represents a lexer.
 */
class Lexer {
  /**
   * Create a lexer.
   * @param {string} type - the input codes
   */
  constructor(input) {
    this.input = input
  }
}

/**
 * typeGroup
 * contains information used to check token types (identifier, keyword, separator, operator, literal, comment...)
 *
 */
var typeGroup = {
  command: [
    // if
    "만약", // while
    "동안에", // return
    "출력", // function
    "함수",
  ],
  operator: ["="],
  literal: [
    {
      type: "number",
      rule: function rule(value) {
        return typeof Number(value) === "number" && !isNaN(Number(value))
      },
    },
  ],
  identifer: ["identifier"],
  comment: ["comment"],
  /**
   * typeChecker.
   * inspects a token and categorizes them into different token classes (identifier, keyword, separator, ...) and their values.
   * @param value - Token value
   */
}

var typeChecker = function typeChecker(value) {
  switch (true) {
    /*  keywords */
    case value === "만약":
      return "command"
      break
    //

    case value === "동안에":
      return "command"
      break
    // return

    case value === "출력":
      return "command"
      break

    /*  commands */

    case value === "만들어":
      return "command"
      break

    /*  operators   */

    case value === "=":
      return "operator"
      break

    /*  types   */

    /*
        isNan is used to check something like 
        Number("test") // NaN
        typeof Number("test") === "number" // true
    */

    case typeof Number(value) === "number" && !isNaN(Number(value)):
      return "number"
      break
    // If it's a string and the previous token is a command

    case typeof value === "string":
      return "variableName"
      break

    /* variables */

    default:
      return "TypeError"
      break
  }
}
/**
 * Lexer.
 * splits a code string into small meaningful chunks (tokens)
 * @todo You need to know how you would split a code (based on what? newlines? whitespaces?)
 * @param {string} code - The whole code that would be compiled.
 */

var lexer = function lexer(code) {
  return code // split by whitespaces
    .split(/\s+/) // remove strings of which length <= 0 (useless)
    .filter(function(elem) {
      return elem.length > 0
    })
    .map(function(elem) {
      return {
        type: typeChecker(elem),
        value: elem,
      }
    })
}

module.exports = lexer
