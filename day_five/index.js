// leaner search algorithm
// const numbers = [10, 50, 30, 70, 80, 60, 20, 90, 40];
// function findANumber(theArray) {
//   for (let i = 0; i < theArray.length; i++) {
//     if (theArray[i] === 20) {
//       return `The Number is at the index ${i} and it is ${theArray[i]}`;
//     }
//   }
// }

// console.log(findANumber(numbers));

// Binary search algorithm
// here we break the data structure into two half and try to find the lement target element.

// let arr = [1, 3, 5, 7, 8, 9];
// let toBeFound = 1;

// function foundNumber(anArray, theNumberTobeFound) {
//   let start = 0;
//   let end = anArray.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (anArray[mid] == theNumberTobeFound)
//       return `the number ${
//         anArray[mid]
//       } has been found at positon ${anArray.indexOf(anArray[mid])} `;
//     else if (arr[mid] < theNumberTobeFound) {
//       start = mid + 1;
//     } else end = mid - 1;
//   }
//   return "The number was not found";
// }

// console.log(foundNumber(arr, toBeFound));

// sorting in Javascript
