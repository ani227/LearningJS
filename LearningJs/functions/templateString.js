//Converting file multi_default_argument.js (normal string) file into templateString.js (template string).

//multiple  arguments

let add = function(a, b, c) {
    return `Sum of all the given number is ${a + b + c}`;
};

let result = add(2, 8, 5);
console.log(result);

// default value

let getScoreText = function(name = "Unknown", score = 0) {
    // return "Name: " + name + "- Score:" + score;
    // return `Name: ${name} - Score: ${score}`;
    return `${name} scored ${score}`;
};

let defaultName = getScoreText(undefined, 99);
let defaultScore = getScoreText("Anna");
let noDefault = getScoreText("Anish", 80);

console.log(defaultName);
console.log(defaultScore);
console.log(noDefault);

// challenge Area - tipCalculator

// total, default tipPercent .2 (20%)

let tipAmount = function(total, tipPercent = 0.2) {
    // let percent = tipPercent * 100 + "%";
    // let tipValue = total * tipPercent;
    // return "Tip Amount = " + total * tipPercent;
    // return `A ${percent} tip on Rs${total} would be Rs${tipValue}`;
    return `A ${tipPercent * 100}% tip on Rs${total} would be Rs${
    total * tipPercent
  }`;

    // above return is preferred because its clean
};

let defaultTip = tipAmount(1000);
console.log(defaultTip);

let addedTip = tipAmount(1000, 0.3);
console.log(addedTip);