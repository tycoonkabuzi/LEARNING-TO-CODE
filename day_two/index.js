// splice is like a swiss knife for arrays, this carries a lot of facilities.
const array = ["I", "am", "the", "best"];
array.splice(0, 1); // here the second parameter is the number of elements to be deleted. so we say from index 0 delete 1 element and in this case it is the first element because it is on the index 0

//console.log(array);
// Here we just deleted from the array and replaced by new data, by mentioning the index from which we will start and how many elements to be removed and what would be the replacement.
const newArray = ["create", "new", "possibilites"];
//newArray.splice(0, 2, "hello", "kitty");
console.log(newArray);

// now let go to the method slice, looking like splice but different this one does not modify the array, it creates a copy.

const modifiedArray = newArray.slice(0, 2);
//console.log(modifiedArray);

// Concat: This creates a new arrays adding data from other arrays

let concArray = [1, 2];

// console.log(concArray.concat([3, 4]));
// console.log(concArray.concat([5, 6]));

// Transform an array

//map most useful and often used

const mapArray = [2, 13, 3, 4];

let transformedMapArray = mapArray.map((item) => item * 4);
//console.log(transformedMapArray);

//sort change element order of an array
// mapArray.sort();
// console.log(mapArray);

// reverse method
mapArray.reverse();
//console.log(mapArray);

// Split and join methods
//const names = "Reed,James,Dieum,Tycoon,Queen";

//const arrayNames = names.split(",");
//console.log(names);

// Join does the very contrary, which is to join the array into a string.

//const stringArray = arrayNames.join(" & ");
//console.log(stringArray);

//reduce & reduceRight

const arrayBeforeReduce = [1, 2, 3, 4, 5];

const reducedArray = arrayBeforeReduce.reduce((sum, digit) => sum + digit, 0);
//console.log(reducedArray);

console.log("============================Tasks============================");

// function camelize(word) {
//   return word
//     .split("-")
//     .map((singleWord, index) =>
//       index === 0
//         ? singleWord
//         : singleWord[0].toUpperCase() + singleWord.slice(1)
//     )
//     .join("");
// }

// console.log(camelize("i-am-vey-glad-to-be-part-of-this"));

//second task

//let arr = [5, 3, 8, 1];
//that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// function filterRange(arr, a, b) {
//   return arr.filter((item) => item >= a && item <= b);
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (matching values)

// console.log(arr); // 5,3,8,1 (not modified)

// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let list = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//   const removedNumber = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (a <= arr[i] && arr[i] <= b) {
//       //arr.splice(0, arr.length, arr[i]);
//       removedNumber.push(arr[i]);
//     }
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!removedNumber.includes(arr[i])) {
//       arr.splice(i, 1);
//     }
//   }
// }

// filterRangeInPlace(list, 1, 4); // removed the numbers except from 1 to 4

// console.log(list); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// arr.sort((a, b) => b - a);
// alert(arr); // 8, 5, 2, 1, -10

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   let copiedArray = arr.map((element) => element);
//   copiedArray.sort((a, b) => a.localeCompare(b));
//   return copiedArray;
// }

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

//Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

// class Calculator {
//   constructor() {
//     this.method = {
//       "+": (a, b) => a + b,
//       "-": (a, b) => a - b,
//     };
//   }

//   addMethod(operator, theFunction) {
//     this.method[operator] = theFunction;
//   }
//   calculate(string) {
//     let [firstNumber, sign, secondNumber] = string.split(" ");
//     firstNumber = +firstNumber; // convert to number
//     secondNumber = +secondNumber;
//     return this.method[sign](firstNumber, secondNumber);
//   }
// }

// const calc = new Calculator();
// console.log(calc.calculate("4 + 2")); // 6
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("3 ** 3");
// console.log(result);

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
/* ... your code */

alert(names); // John, Pete, Mary
