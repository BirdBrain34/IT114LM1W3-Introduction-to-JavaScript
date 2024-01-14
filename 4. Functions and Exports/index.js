/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
greet("Lance")
function greet(name){
    console.log("Hello ",name)
}
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
//Function Declaration: variables can be called anywhere on the code and can be called before or after the declaration of the code
//Function Expression: can create a variable as a function thought can be called after the declaration of the code

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
let calculateArea = function(length,width){
    return length*width
}
console.log(calculateArea(2,5))
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
const modifyArray = (arr, functionMod) => arr.map(element => functionMod(element))

const numbers = [1, 2, 3, 4, 5]
const modifiedNumbers = modifyArray(numbers, number => number * 3)

console.log(modifiedNumbers);
// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const { add, PI } = require("./mathUtils.js")
console.log("Sum: ",add(5,2))
console.log("Pi: ",PI)
// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const {isPalindrome} = require("./isPalindrome.js")
console.log(isPalindrome("Radar"))
console.log(isPalindrome("Potato"))
// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
// require is to import function in other modules
// module.exports is exposing function from the modules
/*
To be completely honest they both do almos the exact same though depends on what kind of module syntax you are using
as it can impact on how the code can work as it I had to use the CommonJS rather than the ECMAScript module. I would prefer
the ECMAScript as just using import/export is easier though it can affect the rest when it comes to using JS syntax in the code.
*/