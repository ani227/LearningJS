let num = 236.3783

console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num)) //makes whole number
console.log(Math.ceil(num))


// to generate random numbers
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) //random  number between 0 - 10 (total 11 numbers)
let randomNum2 = Math.floor(Math.random() * (max - min)) + 1 //random  number between 1 - 10 (10 numbers only)
let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min //random  number between 10 - 20 (11 numbers)
console.log(randomNum)
console.log(randomNum2)
console.log(randomNum3)

//challenge area 
// guess no. btw 1-5 -true if correct -false if not correct
let makeGuess = function(guessNum) {
    let minNum = 1
    let maxNum = 5
    let randomNums = Math.floor(Math.random() * (maxNum - minNum + 1)) + 1 //5 numbers from 1-5
    console.log(randomNums)
    if (guessNum == randomNums)
        return true
    else {
        return false
    }
}

console.log(makeGuess(4))