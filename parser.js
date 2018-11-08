/*
    Parser: makes a 'map' for the code. The map would be the AST
*/

function parser (tokens) {
  let AST = {
    type: 'Not set',
    body: []
  }
  // extract a token at a time as current_token. Loop until we are out of tokens.
  while (tokens.length > 0){
    var current_token = tokens.shift()

    // Since number token does not do anything by it self, we only analyze syntax when we find a word.
    if (current_token.type === 'command') {
      switch (current_token.value) {
        /*
            만들어
        */
        case '만들어' :
          let _type, _command, _variableName, _operator, _argument; 
          /*
          
            first sure things
          
          */
          
          _type = "declaration"
          _command = "let"
          
          // if current token is 만들어, next token should be the name of a variable
          
          let variableName = tokens.shift()
          if(variableName.type === 'variableName') {
            _variableName = variableName.value
          } else {
            throw 'The next token of 만들어 should be the name of a variable.'
          }
          // the next token of a name of a variable should be an operator
          let operator = tokens.shift()
          if(operator.type === "operator"){
            _operator = operator.value
          } else {
             throw "The next token of a name of a variable should be an operator." 
          }
          // the next token of an operator should be the value of a variable
          let argument = tokens.shift()
          if(argument.type === "number"){
              _argument = argument.value
          } else {
              throw "The next token of an operator should be the value of a variable"
          }
          AST.body = [...AST.body, {
              _type,
              _command,
              _variableName,
              _operator,
              _argument
          }] // push the expression object to body of our AST
          AST.type = "declaration"
          break;
      }
    }
  }
  return AST
}

module.exports = parser