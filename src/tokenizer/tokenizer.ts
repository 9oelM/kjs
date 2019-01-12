import typeCheck from './util/typeCheck'
import syntax from './syntax/syntax'
const { reg, str } = syntax

interface Token {
  type: string
  value: string
}

interface RegularExp {
  (input: object): boolean
}

/**
 * Tokenizer.
 * splits a code string into small meaningful chunks (tokens)
*/
class Tokenizer {

  private input: string

  constructor (code: string) {
    this.input = code
  }

  private generateIsFunction (condition: RegularExp | string) {
    return function (ch: string): boolean {
      return condition.test ? condition.test(ch) : condition.includes(ch)
    }
  }

  isKeyword = generateIsFunction(reg.keyword)

  isWhitespace (ch: string): boolean {
    return str.whitespace.includes(ch)
  }
  isDigit (ch: string): boolean {
    return reg.digit.test(ch)
  }
  isOperator (ch) {
    return reg.operator.indexOf(ch) >= 0
  }
  is_punc (ch) {
    return ',;(){}[]'.indexOf(ch) >= 0
  }

}

export default Tokenizer
