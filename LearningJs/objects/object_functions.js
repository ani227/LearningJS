let myBook = {
    title: "Maths CBSE",
    author: "Anish",
    pageCount: 350,
};

let herBook = {
    title: "Physics CBSE",
    author: "Tanu",
    pageCount: 450,
};

let getSummary = function(book) {
    return {
        titleAuthor: `${book.title} by ${book.author}`,
        titlePage: `${book.title} is ${book.pageCount} pages long`,
    };
};

let myBookSummary = getSummary(myBook);
let herBookSummary = getSummary(herBook);

console.log(myBookSummary.titleAuthor);
console.log(myBookSummary.titlePage);
console.log(herBookSummary.titleAuthor);
console.log(herBookSummary.titlePage);

//challenge area
// let fahrenheit = {
//     fahren: 32,
//     cels: ".55555556",
//     kelvin: fahrenheit.fahren + ,
// };

// let tempConvertor = function(temp) {
//     return {
//         celsius: `${temp.fahren}F in celsius is ${(temp.fahren - 32) * temp.cels}C`,
//         kelvin: `${temp.fahren}F in celsius is ${temp.kelvin}`,
//     };
// };

// let getTemp = tempConvertor(fahrenheit);
// console.log(getTemp.celsius);
// console.log(getTemp.kelvin);

let tempConvertor = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9),
    };
};

let getTemp = tempConvertor(32);
console.log(getTemp);