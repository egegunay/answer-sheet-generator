'use strict';

let resultString = "" 
let counter = 1

function foo(x,y) {
    while (counter <= x) {
        resultString += counter + "-)\n"
        counter++
    }
    y.innerHTML = resultString
}

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

