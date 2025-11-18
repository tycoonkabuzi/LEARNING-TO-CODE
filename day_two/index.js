// splice is like a swiss knife for arrays, this carries a lot of facilities.
const array = ["I", "am", "the", "best"];
array.splice(0, 1); // here the second parameter is the number of elements to be deleted. so we say from index 0 delete 1 element and in this case it is the first element because it is on the index 0

console.log(array);
// Here we just deleted from the array and replaced by new data, by mentioning the index from which we will start and how many elements to be removed and what would be the replacement.
const newArray = ["create", "new", "possibilites"];
//newArray.splice(0, 2, "hello", "kitty");
console.log(newArray);

// now let go to the method slice, looking like splice but different this one does not modify the array, it creates a copy.

const modifiedArray = newArray.slice(0, 2);
console.log(modifiedArray);
