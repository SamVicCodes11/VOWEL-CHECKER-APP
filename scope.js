"use strict";

const name = "Musa"; // Global

// console.log(name);

// function getName() {
//   console.log(name);
// }
// getName();

// if (true) {
//   console.log(name);
// }

// Function Scope
// function getName() {
//   //   const name = "Abdulkabir";
//   console.log(name); // Abdulkabir
// }
// getName();

// Block Scope
// if (true) {
//   const name = "Abdulkabir";
//   console.log(name); // Abdulkabir
//   //   console.log(name1);
// }

// console.log(name);

// Example
let random;

function genRandom() {
  random = Math.floor(Math.random() * 10 + 1);

  let text;

  if (random % 2 === 0) {
    text = "Even";
  } else {
    text = "Odd";
  }

  return text;
}
const result = genRandom();

console.log(random);

console.log(result);
