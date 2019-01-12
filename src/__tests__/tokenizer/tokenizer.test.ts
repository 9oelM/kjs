import Tokenizer from '../../tokenizer/tokenizer'

describe('Test', () => {
  it('1', () => {
      const tokenizer = new Tokenizer(' ')
      expect(tokenizer.isWhitespace(' ')).toEqual(true)
    })
})
