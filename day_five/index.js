// leaner algorithm
const numbers = [10, 50, 30, 70, 80, 60, 20, 90, 40];
function findANumber(theArray) {
  for (let i = 0; i < theArray.length; i++) {
    if (theArray[i] === 20) {
      return `The Number is at the index ${i} and it is ${theArray[i]}`;
    }
  }
}

console.log(findANumber(numbers));
