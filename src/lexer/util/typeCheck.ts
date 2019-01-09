import { keywordRegex } from '../syntax/syntax'
import constants from './constants'
const commentRegex = require('comment-regex')

/**
 * typeChecker.
 * inspects a token and categorizes them into different token classes (identifier, keyword, separator, ...) and their values.
 * @param value - Token value
*/

const typeCheck = (value: string): string => {
  console.log(value)
  const { KEYWORD, LITERAL, IDENTIFIER, COMMENT } = constants
  switch (true) {
    case (keywordRegex.test(value)): {
      return KEYWORD
    }
    case (commentRegex().test(value)): {
      return COMMENT
    }
    case (typeof value === 'string'): {
      return IDENTIFIER
    }
    case (true): {
      return LITERAL
    }
    default: {
      return 'TypeError'
    }
  }
}

export default typeCheck
