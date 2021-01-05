let temp = 35;

if (temp >= 11 && temp <= 30) { //include both
    console.log("Go For it, It is pretty nice!");
} else if (temp <= 10 || temp >= 45) { //if any one is true
    console.log("Not good, don't go outside");
} else {
    console.log("Ehh! Do what you want");
}

// challengele

// if both vegan offer only vegan food
// if atleast one vegan offer some vegan food also.
//if none vegan offer everything

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Sir, here are your vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Sir, here are some vegan dishes as well");
} else {
    console.log("Sir, here are items we can serve");
}