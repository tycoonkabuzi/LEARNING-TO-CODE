// here instead of writing array[0] and

const array = ["reed", "kabuzi", 30];
//const [name, surname, age] = array;

// to ignore elements can be done by just putting a comma and leave go to the next one. i just skipped the second element of the array
const [name, , age] = array;
console.log(age);
