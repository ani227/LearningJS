//Challenge Area
//grade calculator (students scores, total possible score)
// You got a B grade (85%)
//grade scheme will be same as CBSE (A-F(0-40))

// let gradeCalculator = function(score, total = 100, grade) {
//     if (score <= 50 && score >= 0) {
//         grade = "F";
//     }

//     if (score <= 60 && score >= 51) {
//         grade = "E";
//     }

//     if (score <= 70 && score >= 61) {
//         grade = "D";
//     }

//     if (score <= 80 && score >= 71) {
//         grade = "C";
//     }

//     if (score <= 90 && score >= 81) {
//         grade = "B";
//     }

//     if (score >= 91) {
//         grade = "A";
//     }
//     let percent = (score / total) * 100;
//     return `You got ${grade} grade with ${percent}%.`;
// };

// let gotScore = gradeCalculator(91);
// console.log(gotScore);

// correction after lecture review

let gradeCalculator = function(score, total = 100, grade) {
    let percent = (score / total) * 100;
    if (percent >= 91) {
        grade = "A";
    } else if (percent >= 81) {
        grade = "B";
    } else if (percent >= 71) {
        grade = "C";
    } else if (percent >= 61) {
        grade = "D";
    } else if (percent >= 51) {
        grade = "E";
    } else {
        grade = "F";
    }
    return `You got ${grade} grade with ${percent}%.`;
};

let gotScore = gradeCalculator(90.6);
console.log(gotScore);