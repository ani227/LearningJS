// function - input (argument), code, output(return value)

// function to square given no.

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let othervalue = square(9);

console.log(value);
console.log(othervalue);

// challenge temp convert F to C.

let convert = function (num) {
  let result = (num - 32) * (5 / 9);
  return result;
};

let celcius = convert(32) + "C";
// let finalResult = celcius + "C";

console.log(celcius);
// console.log(finalResult);
