/*
    <<<LEXER>>>
    lexical analyzer splits a code string into small meaningful chunks (tokens)
    You need to know how you would split a code (based on what? newlines? whitespaces?)
*/

/*
    Type checker. 
    Used to understand every single input.
    
*/
const typeChecker = (value, index, array) => {
    // less complex than if-else
    switch(true){

        /*  commands */
        case (value === "만들어"):
            return "command"
            break;
        
        /*  operators   */
        case (value === "="):
            return "operator"
            break;
            
        /*  types   */
        
        /*
            isNan is used to check something like 
            Number("test") // NaN
            typeof Number("test") === "number" // true
        */
        case (typeof Number(value) === "number" && !isNaN(Number(value))):
            return "number"
            break;
        // If it's a string and the previous token is a command
        case (typeof value === "string" && array[index-1] == "만들어"):
            return "variableName"
            break;
            
        /* variables */    
        default:
            return "TypeError"
            break

    }
}
/*
    만들어 100
*/
const lexer = (code) => {
    return code
    // split by whitespaces
    .split(/\s+/)
    // remove strings of which length <= 0 (useless)
    .filter(function (elem) { return elem.length > 0 })
    .map((elem, index, arr) => {
        return {type: typeChecker(elem, index, arr), value: elem}
    })
}

module.exports = lexer