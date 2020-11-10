// 1st problem

let isAccountlocked = false;
let userrole = "admin";

if (isAccountlocked) {
  console.log("Is Account Loacked");
} else {
  console.log("Welcome!");
}

// 2nd problem

// let isAccountlocked = false;
// let userrole = "admin";

if (isAccountlocked) {
  console.log("Is Account Loacked");
} else if (userrole === "admin") {
  console.log("Welcome Admin.");
} else {
  console.log("Welcome!");
}

// challenge freezing if temp less then 10, hot if greater then 45 and goo in between

let temp = 50;

if (temp <= 10) {
  console.log("It is freezing outside!");
} else if (temp >= 45) {
  console.log("It is hot outside!");
} else {
  console.log("Go For it, It is pretty nice!");
}
