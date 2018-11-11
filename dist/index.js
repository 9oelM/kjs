"use strict";

var lexer = require("./lexer");

var parser = require("./parser");

var transformer = require("./transformer");

var generator = require("./generator");

var _console = console,
    log = _console.log; // let test = 100

var tokens = lexer("만들어 테스트 = 100");
log("---tokens---");
log(tokens);
var ast = parser(tokens);
log("---ast---");
log(ast);
var processedAst = transformer(ast);
log("---processedAst---");
log(processedAst);
var codes = generator(processedAst);
log(codes);