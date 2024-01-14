/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0],numbers[4],numbers[14])
// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
const min = Math.min(...numbers);//minimum of all elements on the list
const max = Math.max(...numbers);//maximum of all elements on the list

const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;//average of all elements on the list

console.log("Min: ",min)
console.log("Max: ",max)
console.log("Ave: ",average)
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Both are using the concept of list to create a list of elements in a memory though the difference between them are the ff:
//Javascript: It is closely tied to the memory management of Javascript engine.
//Python: It is handled automatically by Python's own memory manager basically consuming more memory at the ease of use for lists.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let IT114L = {course_code: "IT114L", name: "Lance Vincent Atendido", units: 3, number_of_students: 41}
// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professor_name = "Job Lipat"
console.log(IT114L.professor_name)
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [{course_code: "IT114", name: "Lance Vincent Atendido", units: 2, number_of_students: 40, professor_name: "Mark Hernandez"}, 
{course_code: "IT133", name: "Lance Vincent Atendido", units: 3, number_of_students: 39,  professor_name: "Khristian Kikuchi"},
{course_code: "HUM039", name: "Lance Vincent Atendido", units: 1, number_of_students: 40,  professor_name: "Rogelio Valenzuela"},  
{course_code: "IT132", name: "Lance Vincent Atendido", units: 2, number_of_students: 38, professor_name: "Leonel De Mesa"}]
// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let unitsTotal = 0; 
for (var course of courses)
{
    unitsTotal += course.units
}
console.log(unitsTotal)
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
//Javascript: let arr {a: 1, b: "true", c: 3.5}
//Python: arr {a: 1, b: "true", c: 3.5}
//they are similar even on syntax tho javascript as more customization options on modifying the variable that holds the object

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
const numberDos = [2,4,6,8,10]
const combineNum = [...numbers,...numberDos]
console.log(combineNum)
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let combineCourse = [IT114L,...courses]
console.log(combineCourse)