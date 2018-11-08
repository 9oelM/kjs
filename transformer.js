/*
    Transformer: compiles to another AST that's more friendly
*/


const transformer = (ast) => {
    let processedAst = {
        body: []
    }
    
    while (ast.body.length > 0) {
        console.log(ast.body)
        let currentNode = ast.body.shift()
        switch (true) {
            /*
                DECLARATION
                
                Nothing to do here. just pass it to generator.
            */
          case (currentNode._type === "declaration") :
            processedAst.body = [...processedAst.body, currentNode]
            break
        }
    }
    return processedAst
}

module.exports = transformer