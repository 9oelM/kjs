const kpop = require("kpop")

const generator = (processedAst) => {
    
    let codes = processedAst.body.map(each => {
        if(each._type === "declaration"){
            return `${each._command} ${kpop.romanize(each._variableName)} ${each._operator} ${each._argument}`
        }
    })
    return codes.join('\n')
}

module.exports = generator