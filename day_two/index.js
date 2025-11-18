// splice is like a swiss knife for arrays, this carries a lot of facilities.
const array = ["I", "am", "the", "best"];
array.splice(0, 1); // here we just deleted the first element (index 0) one Element starting from index 0

console.log(array);
// Here we just deleted from the array and replaced by new data, by mentioning the index from which we will start and how many elements to be removed and what would be the replacement.
const newArray = ["create", "new", "possibilites"];
//newArray.splice(0, 2, "hello", "kitty");
console.log(newArray);
