/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const powNums = numbers.map(x => Math.pow(x,2))
console.log(powNums)
// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenFilter = numbers
    .filter(x => x % 2 === 0)
    .map(x => x ** 2);
console.log(evenFilter)
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sumNums = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sumNums)
// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upWords = words.map(word => word.toUpperCase())
console.log(upWords)
// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4)
console.log(longWords)
// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const oneWord = longWords.reduce((acc, word) => acc + word, '')
console.log(oneWord)
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
//Map: transform the elements of the array to any value
//Filter: Presents all elements that filled out the condition
//Reduce: Reduces the array into a single value or output