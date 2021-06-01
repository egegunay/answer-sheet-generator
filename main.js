'use strict';
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const lengthInput = document.getElementById("length");
const result = document.getElementById("result");

generateButton.addEventListener("click", () => {
  let resultString = "";
  const count = Number(lengthInput.value);
  if (Number.isNaN(count)) return;

  for (let i=0; i < count; i++) {
    resultString += `${i+1}-)\n`;
  }
  result.value = resultString;
});

copyButton.addEventListener("click", () => {
  result.select();
  document.execCommand("copy");
});
