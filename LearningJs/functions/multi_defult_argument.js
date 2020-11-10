//multiple  arguments

let add = function(a, b, c) {
    return a + b + c;
};

let result = add(2, 8, 5);
console.log(result);

// default value

let getScoreText = function(name = "Unknown", score = 0) {
    return "Name: " + name + "- Score:" + score;
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
    return "Tip Amount = " + total * tipPercent;
};

let defaultTip = tipAmount(1000);
console.log(defaultTip);

let addedTip = tipAmount(1000, 0.3);
console.log(addedTip);