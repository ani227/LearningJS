let myBook = {
    title: "Maths CBSE",
    author: "Anish",
    pageCount: 350,
};

console.log(myBook);
console.log(myBook.title);

myBook.title = "Maths Part 2 CBSE";
console.log(`A ${myBook.title} by ${myBook.author}`);

// challenge area

let myDetails = {
    name: "Anish",
    age: 24,
    location: "Lucknow",
};

console.log(
    `${myDetails.name} is ${myDetails.age} and lives in ${myDetails.location}`
);

myDetails.age = 25;
myDetails.location = "Noida";
console.log(
    `After 1 year, ${myDetails.name} will be ${myDetails.age} and move to ${myDetails.location}`
);