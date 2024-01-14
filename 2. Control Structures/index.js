/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50)
{
    console.log("1. more than fifty")
}
else
{
    console.log("1. less than fifty")
}
// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 1 === 0)
{
    console.log("2. odd")
}
else if (randomNumber % 2 === 0)
{
    console.log("2. even")
}
// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) 
{
    console.log("fizzbuzz")
}
if (randomNumber % 3 === 0) 
{
    console.log("fizz")
}
if(randomNumber % 5 === 0)
{
    console.log("buzz")
}
let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = (randomNumber % 2 === 0) ? "Even" : "Odd"
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: When using a ternary operator you simply only have two choices either a true or false statement and since you set a condition to set for true it will choose if it fills the condition for true and if not it will go automatically false


// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 1; i <= n; i++)
{
    console.log(i)
}
const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let j = 0
console.log("While loop")
while (j < list.length)
{
    console.log (list[j])
    j++
}
// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
//While loop: Pre-condition loop
//Do while loop: Post-condition loop

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("For Of loop")
for (const item of list)
{
    console.log(item)
}
// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("For In loop")
let listItems = ""
for (let k in list)
{
    listItems += list[k]
}
console.log(listItems)
// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("For Each loop")
list.forEach((item) => console.log(item))
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
/*
For of = it iterates the values of the object 
For in = it iterates the properties of the object 
For each = it iterates each element of the array
*/
// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try{
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log("Current Quotient: ",numerator / denominator);
    }
}catch (error){
    if (error.message === "Division by zero error")
    {
        console.log("Error! the value has been divided by zero")
    }
}
finally
{
    console.log("cleaning up resources")
}