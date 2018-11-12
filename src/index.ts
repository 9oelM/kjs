const lexer = require('./lexer')
const parser = require('./parser')
const transformer = require('./transformer')
const generator = require('./generator')
const { log } = console
// let test = 100
let tokens = lexer('만들어 테스트 = 100')
log('---tokens---')
log(tokens)
let ast = parser(tokens)
log('---ast---')
log(ast)
let processedAst = transformer(ast)
log('---processedAst---')
log(processedAst)
let codes = generator(processedAst)
log(codes)
