# Tools used
* [jsdoc](https://github.com/jsdoc3/jsdoc)
* [prettier](https://github.com/prettier/prettier)
* [Node^8.9](nodejs.org)
* [babel-cli](https://github.com/babel/babel)
* [eslint](https://github.com/eslint/eslint)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [ava](https://github.com/avajs/ava)

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

# Day 3
More into tokenization.

## Relevant Github repos
First I thought maybe having a look at these repos is a good starting point.
* [moo](https://github.com/no-context/moo)
* [js-tokens](https://github.com/lydell/js-tokens)
* [Chiffon](https://github.com/polygonplanet/Chiffon)

## Sorting out dependencies and project structured
Installed dependencies and configured scripts as follows:
```json
"devDependencies": {
    "@babel/preset-env": "^7.1.5",
    "ava": "1.0.0-rc.1",
    "babel-cli": "^6.26.0",
    "eslint": "^5.9.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-jsx-a11y": "^6.1.2",
    "eslint-plugin-react": "^7.11.1",
    "jsdoc": "^3.5.5",
    "onchange": "^5.1.0",
    "prettier": "^1.15.1"
  },
  "scripts": {
    "test": "ava",
    "prettier": "onchange '**/*.js' -- prettier --write {{changed}}",
    "eslint": "./node_modules/.bin/eslint",
    "jsdoc": "./node_modules/.bin/jsdoc",
    "babel": "babel src -d build"
  },
```


## References to study
* [Project: A Programming Language - eloquentjavascript](https://eloquentjavascript.net/12_language.html)
* [How to implement a programming language in JavaScript - lisperator.net](http://lisperator.net/pltut/)
* [How to be* a compiler — make a compiler with JavaScript](https://medium.com/@kosamari/how-to-be-a-compiler-make-a-compiler-with-javascript-4a8a13d473b4)
* [Compiler design - tutorialspoint](https://www.tutorialspoint.com/compiler_design)