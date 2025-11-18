// here instead of writing array[0] and

const array = ["reed", "kabuzi", 30];
//const [name, surname, age] = array;

// to ignore elements can be done by just putting a comma and leave go to the next one. i just skipped the second element of the array
const [name, , age] = array;

// we can use destructuring with any iterable

const [a, b, c] = "live";
const [one, two, three] = new Set([1, 2, 3]);

//assignable.

let user = {};
[user.id, user.name] = "John Does".split(" "); // we just assigned the user ID and user Name to an empty user object.
console.log(user);

//looping with entries

const agent = {
  name: "Aksanti",
  number: 14345,
  age: 34,
};

const arrayFromObject = Object.entries(agent);
for (let [key, value] of arrayFromObject) {
  //console.log(`${key}:${value}`);
}
// with destructuring we can swap the value of two variables easily
let admin = "tycoon";
let standard = "queen";

[admin, standard] = [standard, admin];

// The rest ... it is not obliged to be the word rest it can be any other word.
let [test1, test3, test2, ...rest] = ["Reed", "Kabuzi", 23, 13, 45, "Herman"];

// nested destructuring but the name of the variable on the left have to match the name of the variable on right.

let items = {
  guitars: 12,
  trousers: {
    jeans: 22,
    lenin: 15,
  },
  computer: 1,
};

let {
  guitars,
  trousers: { jeans, lenin },
  computer,
} = items;

// smart log parameters

let human = {
  name: "Tycoon",
  age: 20,
};

function displayHuman({
  name = "No name",
  age = "None",
  assets = ["Radio", "Tele"],
}) {
  console.log(
    `My name is ${name} I am ${age} year${
      age > 1 ? "s" : ""
    } old and my assets are ${assets.join(" and ")}`
  );
}

displayHuman(human);
