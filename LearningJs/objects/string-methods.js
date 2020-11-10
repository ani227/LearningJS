let name = 'Anish Verma'

//length property 
console.log(name.length)

//convert toUpperCase function 
console.log(name.toUpperCase())

console.log(name.toLowerCase())

//includes method
let pswd = 'Anish@2279@abc'
console.log(pswd.includes('abc')) //to check if pswd contains any specific string or not.

//challenge area 

let isValidPassword = function(newPassword) {
    if (newPassword.length > 8 && !newPassword.includes('password')) //used not operator to not include
        return 'It is a valid password.'
    else {
        return 'Please enter valid password.'
    }
}

console.log(isValidPassword('password@2298')) // not valid bcoz it can't contain the string password in it.
console.log(isValidPassword('anish@327138'))
console.log(isValidPassword('ANi@12'))