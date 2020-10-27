'use strict';
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const input = document.getElementById("input");
const changeme = document.getElementById("changeme");

generateButton.addEventListener("click", () => {
  let resultString = "";
  const count = Number(input.value);
  if (Number.isNaN(count)) return;

  for (let i=0; i < count; i++) {
    resultString += `${i+1}-)\n`;
  }
  changeme.value = resultString;
});

copyButton.addEventListener("click", () => {
  changeme.select();
  changeme.setSelectionRange(0, 99999);
  document.execCommand("copy");
});

/*
let resultString = "" 
let counter = 1

function foo(x,y) {
    while (counter <= document.querySelector(x).value) {
        resultString += counter + "-)\n"
        counter++
    }
    document.getElementById(y).innerHTML = resultString
}
*/

/*function foo() {
    inPut()
    valueRead()
    while (counter <= valueRead) {
        resultString += counter + "-)\n"
        counter++
    }
    changeMe.innerHTML = resultString
    console.log(resultString)
    console.log(counter)
}
*/
