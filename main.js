'use strict';


let counter = 1
let resultString = ""

function foo() {
    let valueRead = parseInt(document.getElementById("input").value)
    while (counter <= valueRead) {
        resultString += counter + "-)\n"
        counter++
    }
    document.getElementById("chngme").innerHTML = resultString
    console.log(resultString)
}

document.getElementById("btn").addEventListener("click", foo())