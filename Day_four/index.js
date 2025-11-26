// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(2), ms);
//   });
// }

// delay(2000).then(() => alert("runs after 3 seconds"));

// Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

// The new usage:
// function go() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add("message-ball");
//     div.append("Hello, world!");
//   });
// }
// function showCircle(cx, cy, radius) {
//   let div = document.createElement("div");
//   div.style.width = 0 + "px";
//   div.style.height = 0 + "px";
//   div.style.left = cx + "px";
//   div.style.top = cy + "px";
//   div.className = "circle";
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + "px";
//       div.style.height = radius * 2 + "px";
//     }, 0);
//     document.body.append(div);
//     div.addEventListener("transitionend", function handler() {
//       div.removeEventListener("transitionend", handler);
//       resolve(div);
//     });
//   });
// }

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);
