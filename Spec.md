# Grammar

## 0. Philosophy
1. kjs is not in support for semicolons. Bye, semicolons.
2. kjs is in support for python-like indentation rules. 
3. kjs embraces Korean keywords but also compromises to maintain widely used programming syntax.
4. kjs does not support Korean for javascript APIs attached to environments (i.e. anything like `console`, `Array`, `Window` ...). So you should still use English for these. kjs is only, almost about syntax.
5. kjs has lots of keywords, so it has some naming conventions to make it easy:
    * verb: ~해
    * noun: the noun itself in Korean
    * adjective: ~한 / ~적
    * adverb: varies
    * exceptions: for, instanceof, typeof...

## 1. Variables
javascript
```js
let test = "test"; 
console.log(test); // test

const idontchange = 1;
console.log(idontchange); // 1
```

kjs
```
시험삼아 를 "test" 로 만들어
console.log(시험삼아) // test

나는바뀌지않아 를 1 로 일정하게 만들어
console.log(나는바뀌지않아)
```
As you see, kjs is just like practical Korean. 

## 2. Comments
javascript
```js
/*
    multiline comments
*/

// single comment
```

kjs 
```
/*
    multiline comments
*/

// single comment
```
kjs has the same rule for comments.

## 3. Operators
For the most part, it stays the same as javascript--for things like addition, subtraction, division, multiplication, equality and inequality.

For more rules on operators in javascript, see [Mozilla's dev page](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#Operators).

One thing to note is the rule of assignment:
javascript
```js
let test = "test";
test = "changed";
```

kjs 
```
시험삼아 를 "test" 로 만들어
시험삼아 를 "changed" 로
```
similar to javascript, kjs would just remove the keyword signifying the creation of a variable: `만들어`, tantamount to `let`.

## 4. Conditionals
javascript
```js
let test = Math.random() * 3;

if(test < 0){
    test = test + 100;
}
else if(test > 1 && test < 2){
    test = test + 200;
}
else{
    test = test + 300;
}

```

kjs 
```
시험삼아 를 Math.random() * 3 로 만들어
만약 (시험삼아 < 0)
    시험삼아 를 시험삼아 + 100 로    
아니면 (시험삼아 > 1 && 시험삼아 < 2)
    시험삼아 를 시험삼아 + 200 로
아니면 
    시험삼아 를 시험삼아 + 300 로
```
Things to note:
1. kjs uses indentation instead of curly brackets. 
2. For conditions, however, to allow a coder to see the condition clearer, kjs uses round brackets to wrap the conditions. 

javascript
```js
let test = Math.random() * 3;

if(test < 0){
    test = test + 100;
}
else{
    test = test + 300;
}

```

kjs 
```
시험삼아 를 Math.random() * 3 로 만들어
만약 (시험삼아 < 0)
    시험삼아 를 시험삼아 + 100 로   
아니면 
    시험삼아 를 시험삼아 + 300 로
```
Things to note: 
1. If `아니면`, which is `else` in javascript, is followed with no round brackets, it would be interpreted as `else`. 
2. But if `아니면` is followed by a pair of round brackets with a condition in it, it would be interpreted as `else if`.

## 5. Functions
javascript
```js
function test(apples, bananas){
    console.log(`I have a total of ${apple+bananas} fruits.`);
    return apples+bananas
}
```

kjs 
```
함수 시험삼아(사과, 바나나)
    console.log(`나는 총 ${사과+바나나} 개의 과일을 가지고 있어.`)
    사과+바나나 를 산출해
```
Things to note:
1. When declaring a function (`함수`), you also need to cling to indentation.
2. When you want to `return` something, you use `~ 를 산출해` syntax.

## Checkpoint 
Now you have reached up to a basic understanding of how kjs works. Now mingle around with the code, or continue reading through. 

## 6. Switch expression
## 7. Loop
### 7.1 While loop
### 7.2 For loop
## 8. Break
## 9. Regular expressions
## 10. Error handling 
## 11. Class 
## 12. ES6: `static`, `import`, `export`
## . Async operations
## . Others