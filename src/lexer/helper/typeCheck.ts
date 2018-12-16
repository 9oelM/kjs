import { keywordsRegex } from './syntax/syntax'
import C from './constants'

/**
 * typeChecker.
 * inspects a token and categorizes them into different token classes (identifier, keyword, separator, ...) and their values.
 * @param value - Token value
*/

const typeCheck = function (value: string): string {
  console.log(value)
  switch (true) {
    case (keywordsRegex.test(value)): {
      return C.KEYWORD
    }
    case (literalRegex.test(value)): {
      return C.LITERAL
    }
    case (typeof value === 'string'): {
      return C.IDENTIFIER
    }
    default: {
      return 'TypeError'
    }
  }
}

export default typeCheck
