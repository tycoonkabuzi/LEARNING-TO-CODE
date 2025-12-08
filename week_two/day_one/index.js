//The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones,
//typically starting with 0 and 1. The sequence begins \(0,1,1,2,3,5,8,13,21,...\), and its terms can be
// defined by the recurrence relation

// const fibonacciSequence = (startingPoint) => {
//   if (startingPoint === 0) return [0];
//   if (startingPoint === 1) return [0, 1];

//   const seq= fibonacciSequence(startingPoint - 1);
//   const nextNumber = seq[seq.length - 1] + seq[seq.length - 2];
//   seq.push(nextNumber);
//   return seq;
// };

// console.log(fibonacciSequence(10));
// we have 10-1= 9 this is sec. next number equals to 10+ 0;

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

// starting with recursion  to write a function that calculates

// const sumTo = (n) => {
//   //base
//   if (n <= 0) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// };

// console.log(sumTo(4));

// same with a loop

// const sumTo = (n) => {
//   let arrayNumbers = [];
//   for (let i = 0; i <= n; i++) {
//     arrayNumbers.push(i);
//   }

//   return arrayNumbers.reduce((prev, current) => prev + current, 0);
// };
