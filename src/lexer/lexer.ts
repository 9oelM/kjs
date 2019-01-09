import typeCheck from './util/typeCheck'

interface Token {
  type: string
  value: string
}

/**
 * Lexer.
 * splits a code string into small meaningful chunks (tokens)
 * @todo You need to know how you would split a code (based on what? newlines? whitespaces?)
 * @param {string} code - The whole code that would be compiled.
*/
const lexer = (code: string): Token[] => {
  return code
        // split by whitespaces
        .split(/\s+/)
        // remove strings of which length <= 0 (useless)
        .filter((elem) => elem.length > 0)
        .map((elem) => ({ type: typeCheck(elem), value: elem }))
}

export default lexer
