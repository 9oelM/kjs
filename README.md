# Tools used
* [jsdoc](https://github.com/jsdoc3/jsdoc)
* [prettier](https://github.com/prettier/prettier)
* Node^8.9
* [babel](https://github.com/babel/babel)


# Day 1
Just mingled around with the code from @kosamari's article on [How to be* a compiler — make a compiler with JavaScript](https://medium.com/@kosamari/how-to-be-a-compiler-make-a-compiler-with-javascript-4a8a13d473b4).

# Day 2
Recognized I need to study on how a compiler really works. [Wikipedia](https://en.wikipedia.org/wiki/Lexical_analysis) provided a vast range of info on that. First, lexers:

## Lexer
So what actually is a lexer? 
* It is the first phase of a compiler frontend. 
* Lexers are often used for compilers but can be also used for linters and so on. 

### Two steps in lexing 
1. Scanning: segment input strings into syntactic units (lexemes, words matched for a pattern to produce a certain token) and categorizes these into token classes. 
2. Evaluating: converts lexemes into processed values. 

### Relevant libraries (in javascript)
There was [one lexer repo](https://github.com/aaditmshah/lexer) on github that seemed interesting enough.

### Token 
> It is structured as a pair consisting of a **token name** and an **optional token value**. 

(Copied directly from [Wikipedia](https://en.wikipedia.org/wiki/Lexical_analysis#Token))
| Token name | Token value   | 
| ------------- |:-------------| 
| identifier| x, color, UP |
| keyword    | if, while, return   |  
| separator | }, (, ; |  
| operator | +, <, = |
| literal | true, 6.02e23, "music" |
| comment | /* Retrieves user data */, // must be negative |

So, [for example](https://www.tutorialspoint.com/compiler_design/compiler_design_lexical_analysis.htm), 

```c
int value = 100;
```

would produce tokens below:

```c
int (keyword), value (identifier), = (operator), 100 (constant) and ; (symbol).
```

## References to study
* [Project: A Programming Language - eloquentjavascript](https://eloquentjavascript.net/12_language.html)
* [How to implement a programming language in JavaScript - lisperator.net](http://lisperator.net/pltut/)
* [How to be* a compiler — make a compiler with JavaScript](https://medium.com/@kosamari/how-to-be-a-compiler-make-a-compiler-with-javascript-4a8a13d473b4)
* [Compiler design - tutorialspoint](https://www.tutorialspoint.com/compiler_design)