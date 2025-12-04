//The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones,
//typically starting with 0 and 1. The sequence begins \(0,1,1,2,3,5,8,13,21,...\), and its terms can be
// defined by the recurrence relation

const fibonacciSequence = (startingPoint) => {
  if (startingPoint === 0) return [0];
  if (startingPoint === 1) return [0, 1];

  const seq = fibonacciSequence(startingPoint - 1);
  const nextNumber = seq[seq.length - 1] + seq[seq.length - 2];
  seq.push(nextNumber);
  return seq;
};

console.log(fibonacciSequence(10));
// we have 10-1= 9 this is sec. next number equals to 10+ 0;
