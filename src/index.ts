import lexer from './lexer/lexer'
const { log } = console

let tokens = lexer('시험삼아 를 \'test\' 로 만들어')
log('---tokens---')
log(tokens)
