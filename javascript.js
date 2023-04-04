let resultAdd
let multiply1
let multiply2
let resultMul
let lastLetter
let capLet

// resultAdd = parseInt(prompt("Insert your number"))
// console.log('your result is ' + add7(resultAdd))

// multiply1 = parseInt(prompt("Insert your first numeber "))
// multiply2 = parseInt(prompt("Insert your second number "))
// console.log('the product of both numbers is ' + multiply(multiply2, multiply1))

// capLet = prompt("Type something that's not capitalized")
// console.log("The first letter is now capitalized: " + capitalize(capLet))

lastLetter = prompt("Type any string, I will return the last letter: ")
console.log("the last letter is: " + letterend(lastLetter))

function add7 () {
    resultAdd = resultAdd + 7
    return resultAdd
}

function multiply () {
    resultMul = multiply1 * multiply2
    return resultMul
}

function capitalize () {
    capLet = capLet.charAt(0).toUpperCase() + capLet.slice(1,)
    return capLet
}

function letterend () {
    lastLetter = lastLetter.slice(-1,)
    return lastLetter
}