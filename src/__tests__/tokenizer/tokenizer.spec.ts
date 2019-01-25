import Tokenizer from '../../tokenizer/tokenizer'
import syntax from '../../tokenizer/syntax/syntax'

describe('Tokenizer', () => {
  let tokenizer: Tokenizer
  const { keywords, operator, punctuation } = syntax
  const DUMMY = 'DUMMY'

  beforeEach(() => {
    tokenizer = new Tokenizer(' ')
  })

  describe('#isWhitespace()', () => {

    it('should recognize " " as a whitespace', () => {
      expect(tokenizer.isWhitespace(' ')).toEqual(true)
    })

    it('should recognize tab (\\t) as a whitespace', () => {

            // The space below is a tab, not a space.
      expect(tokenizer.isWhitespace(' ')).toEqual(true)
    })

    it('should recognize newline (\\n) as a whitespace', () => {
      expect(tokenizer.isWhitespace('\n')).toEqual(true)
    })

    it('should not recognize a string as a whitespace', () => {
      expect(tokenizer.isWhitespace(DUMMY)).toEqual(false)
    })
  })

  describe('#isKeyword()', () => {
    keywords.forEach((keyword: string) => {
      it(`should recognize keyword: ${keyword}`, () => {
        expect(tokenizer.isKeyword(keyword)).toEqual(true)
      })
    })
    
    it('should not recognize any other characters as a punctutation', () => {
      expect(tokenizer.isPunctuation(DUMMY)).toEqual(false)
      expect(tokenizer.isPunctuation("테스트")).toEqual(false)
    })
  })

  describe('#isDigit()', () => {
    it('should recognize a number as a digit', () => {
      expect(tokenizer.isDigit('30')).toEqual(true)
    })

    it('should recognize a number with dec point as a digit', () => {
      expect(tokenizer.isDigit('10.123456789')).toEqual(true)
    })

    it('should not recognize a number mixed with string as a digit', () => {
      expect(tokenizer.isDigit('10.ab')).toEqual(false)
    })

    it('should not recognize a string as a digit', () => {
      expect(tokenizer.isDigit(DUMMY)).toEqual(false)
    })
  })

  describe('#isOperator', () => {
    operator.split('').forEach((op: string) => {
      it(`should recognize operator ${op} as an operator`, () => {
        expect(tokenizer.isOperator(op)).toEqual(true)
      })
    })
    
    it('should not recognize any other characters as operators', () => {
      expect(tokenizer.isOperator('@')).toEqual(false)
      expect(tokenizer.isOperator('a')).toEqual(false)
    })
  })

  describe('#isPunctuation', ()=> {
    punctuation.split('').forEach((punc: string) => {
      it(`should recognize punctuation ${punc} as a punctuation`, () => {
        expect(tokenizer.isPunctuation(punc)).toEqual(true)
      })
    })
    
    it('should not recognize any other characters as punctutations', () => {
      expect(tokenizer.isPunctuation('@')).toEqual(false)
      expect(tokenizer.isPunctuation('a')).toEqual(false)
    })
  })
})
