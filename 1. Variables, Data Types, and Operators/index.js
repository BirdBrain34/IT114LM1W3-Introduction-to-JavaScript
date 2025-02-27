/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log("Name: ",name)
var name = "Potato"
console.log("Name: ",name)
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
var numA = 69
if (numA == 69)
{
    let numA = 420
    console.log("Num: ",numA)
}
console.log("Num: ",numA)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const numB = 2
/*if (numB == 2)
{
    numB = 20
    console.log("Num: ",numB)//procs an error stating that const cannot be changed due to the value being fixed
}*/

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
//var is a global variable meaning it can change its current value depending on where it was last changed.
//let is like a temporary pass variable where you can change the value of a variable without changing the actual value of the parent variable.
//const is a "fixed" variable where you cannot change the value even on a specific code block.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const arithA = 4*6/10+5
console.log(arithA)
// Checkpoint 1.2 What operators did you use?
// Answer: just use multiplication, division, and addition or the basic arithmetic operators
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
var x = 5 *2
if (x == 10)
{
    let x = 24/6
    console.log("Num: ",x)
}
console.log("Num: ",x)
// Checkpoint 1.3 What operators did you use?
// Answer: I use multiplication as my first to be followed by an selection statement to test out let to change to a different operator being division


// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let a = 5
let b = 0
console.log("AND")
console.log(a&&b)
console.log(2&&1)
console.log("OR")
console.log(a||b)
console.log(-1||a)
// Checkpoint 1.4 What operators did you use?
// Answer: I used the logical AND and OR operators 
// For AND I noticed that if a is lower than b it returns the greater value but if a is higher it returns the lower value
//For OR I noticed that for any value it always return the first value being a in this case

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const milk = "Milkshake"
console.log("Truth bout milk")
console.log(Boolean(milk == "Milktea"))

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: It returns true
// Your code here
console.log([]==false)