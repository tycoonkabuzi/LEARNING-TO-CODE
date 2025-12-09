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

//The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1.
// The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.

// alert( factorial(5) ); // 120
// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

// const factorial = (n) => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };
// console.log(factorial(2));

// importance: 5
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

// const fibonaciFunction = (n) => {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonaciFunction(n - 1) + fibonaciFunction(n - 2);
//   }
// };

// console.log(fibonaciFunction(7));

//same fibonacci but with no recursion function

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(b);
  }
}
fib(3);
