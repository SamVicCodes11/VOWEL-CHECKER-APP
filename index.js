"use strict";

const vowel = ["a", "e", "i", "o", "u"];

const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");
const message = document.querySelector(".message");

btn.addEventListener("click", function () {
  // collecting the value & immediately converting it to lowercase
  const textareaValue = textarea.value.toLowerCase();

  if (!textareaValue) {
    textarea.focus();
    return;
  }

  const splittedString = textareaValue.split("");

  let num = 0;

  // Corrected vowel counting
  splittedString.forEach(function (char) {
    if (vowel.includes(char)) {
      num++;
    }
  });

  // Display the count
  message.textContent = `Vowel count: ${num}`;

  textarea.value = ""; // empty textarea
  textarea.focus(); // focus textarea
});
