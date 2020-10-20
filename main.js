'use strict';

const requestedValue = parseInt(prompt("How long will your answer sheet will be", "40"))
const typeOfResult = prompt("Would you like your answer to be an array or a string?", "String").toLowerCase()
let counter = 1
let resultArray = []
let resultString = ""

switch (typeOfResult) {
    case "string":
        while (counter <= requestedValue) {
            resultString += counter + "-)\n"
            counter++
        }

        alert("Check the console!")
        console.log(resultString)
        break;
    
    case "array":
        while (counter <= requestedValue) {
            resultArray.push(counter + "-)")
            counter++
        }
        
        console.log(resultArray) 
        alert("Check the console!")
        break;
        
    default:
        alert("Wha?")
        break;
}