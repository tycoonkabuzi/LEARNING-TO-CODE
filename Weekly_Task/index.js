// Build a dynamic quiz app combining arrays, objects, async, and DOM	User can answer questions, get feedback, see score at end
//  Provide a Name
const generalQuiz = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A. Venus", "B. Mars", "C. Saturn", "D. Jupiter"],
    answer: "B",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["A. Elephant", "B. Giraffe", "C. Blue Whale", "D. Hippopotamus"],
    answer: "C",
  },
  {
    question: "What is H₂O commonly known as?",
    options: ["A. Salt", "B. Water", "C. Oxygen", "D. Hydrogen"],
    answer: "B",
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    options: ["A. Germany", "B. France", "C. Italy", "D. Spain"],
    answer: "B",
  },
  {
    question: "How many minutes are in an hour?",
    options: ["A. 30", "B. 60", "C. 90", "D. 120"],
    answer: "B",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["A. Tiger", "B. Lion", "C. Bear", "D. Leopard"],
    answer: "B",
  },
  {
    question: "What is the fastest land animal?",
    options: ["A. Falcon", "B. Horse", "C. Cheetah", "D. Leopard"],
    answer: "C",
  },
  {
    question: "Which of these is a primary color?",
    options: ["A. Green", "B. Purple", "C. Blue", "D. Orange"],
    answer: "C",
  },
  {
    question: "How many days are in a leap year?",
    options: ["A. 364", "B. 365", "C. 366", "D. 367"],
    answer: "C",
  },
  {
    question: "What gas do plants absorb during photosynthesis?",
    options: ["A. Oxygen", "B. Nitrogen", "C. Carbon Dioxide", "D. Helium"],
    answer: "C",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["A. K2", "B. Kilimanjaro", "C. Everest", "D. Mont Blanc"],
    answer: "C",
  },
  {
    question: "Which instrument has black and white keys?",
    options: ["A. Guitar", "B. Drum", "C. Piano", "D. Violin"],
    answer: "C",
  },
];
const main = document.querySelector(".main");
const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const input = document.getElementById("input");

let userName = null;
let count = 0;
function storeName(e) {
  e.preventDefault();
  userName = input.value;
  console.log(userName);
  createQuestions();
}
console.log(userName);

// I am going to create a facility which will display the questions, whenever we click to next it shows the next questions,dynamically

function createQuestions() {
  const question = document.createElement("h1");
  const form = document.createElement("form");
  const containerRadio = document.createElement("div");
  generalQuiz[0].options.forEach((option) => {
    const options = document.createElement("input");
    const label = document.createElement("label");
    const containerOption = document.createElement("div");
    containerOption.className = "container_option";
    options.type = "radio";
    label.textContent = option;
    containerRadio.className = "container_radio";
    containerOption.appendChild(options);
    containerOption.appendChild(label);

    containerRadio.appendChild(containerOption);
  });
  const nextButton = document.createElement("button");
  nextButton.className = "button";

  nextButton.innerText = "Next question";

  question.innerText = generalQuiz[0].question;
  main.appendChild(question);
  form.appendChild(containerRadio);

  form.appendChild(nextButton);
  main.appendChild(form);
}
