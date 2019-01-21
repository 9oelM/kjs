import typeCheck from './util/typeCheck'
import syntax from './syntax/syntax'

interface Token {
  type: string
  value: string
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

  private generateIsFunction (condition: any) {
    return function (ch: string): boolean {
      return condition.test ? condition.test(ch) : condition.includes(ch)
    }
  }

  isWhitespace = this.generateIsFunction(syntax.whitespace)

  isKeyword = this.generateIsFunction(syntax.keyword)

  isDigit = this.generateIsFunction(syntax.digit)

  isOperator = this.generateIsFunction(syntax.operator)

  isPunctuation = this.generateIsFunction(syntax.punctuation)

}

export default Tokenizer
