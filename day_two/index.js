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

// Concat: This creates a new arrays adding data from other arrays

let concArray = [1, 2];

console.log(concArray.concat([3, 4]));
console.log(concArray.concat([5, 6]));

// Transform an array

//map most useful and often used

const mapArray = [2, 13, 3, 4];

let transformedMapArray = mapArray.map((item) => item * 4);
console.log(transformedMapArray);

//sort change element order of an array
// mapArray.sort();
// console.log(mapArray);

// reverse method
mapArray.reverse();
console.log(mapArray);

// Split and join methods
const names = "Reed,James,Dieum,Tycoon,Queen";

const arrayNames = names.split(",");
console.log(names);

// Join does the very contrary, which is to join the array into a string.

const stringArray = arrayNames.join(" & ");
console.log(stringArray);

//reduce & reduceRight

const arrayBeforeReduce = [1, 2, 3, 4, 5];

const reducedArray = arrayBeforeReduce.reduce((sum, digit) => sum + digit, 0);
console.log(reducedArray);
