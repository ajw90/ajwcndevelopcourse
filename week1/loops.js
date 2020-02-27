/*
Notes: 
A loop enables us to perform the same sequence of code several times over multiple
iterations.

Syntax:

// For loop:
for (<expr initial run once>; <expr condition before each>; <expr after each>) {
    <code>
}

// While loop:

while (<expr condition before each iteration>) {
    <code>
}

*/

/*
Task:
Create an array of your favourite films; add 2 more using a method; using a for loop,
traverse the array.
*/

/*
let favouriteFilms = [
    "Mars Attacks",
    "Working Girl",
    "Muriel's Wedding"
];

favouriteFilms.push("All About Eve", "Cleopatra");

let index;
for (index = 0; index < favouriteFilms.length; index++) {
    console.log(`Favourite (for this purpose) film number ${index + 1}: ${favouriteFilms[index]}`);
}
*/

/*
let i;
// Expect numbers 0 through 9
for (i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
Task:
Create a for loop that counts down from 9 to 0.
*/

/*
let i;
for (i = 9; i >= 0; i--) {
    console.log(i);
}
*/

/*
// Example of while loop
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "";

while (currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(currentCard);
*/

/*
Task:
Create a function called filmCheck() that checks if the
3rd film in the array is Ghostbusters.
If it is, it should return “Yay it’s Ghostbusters”. If it isn’t,
it should return “Booo, we want Ghostbusters”
*/

/*
let favouriteFilms = [
    "Mars Attacks",
    "Working Girl",
    "Ghostbusters"
];

favouriteFilms.push("All About Eve", "Cleopatra");

const filmCheck = (film) => {
    if (film === "Ghostbusters") {
        return "Yay it's Ghostbusters";
    }
    else {
        return "Booo, we want Ghostbusters";
    }
};

let index;
for (index = 0; index < favouriteFilms.length; index++) {
    if (index === 2) {
        console.log(" ------- " + filmCheck(favouriteFilms[index]));
    }
    console.log(`Favourite (for this purpose) film number ${index + 1}: ${favouriteFilms[index]}`);
}
*/

/*
// Less complicated version of the above
const filmCheck = (films) => {
    if (films[2] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters");
    }
    else {
        console.log("Booo, we want Ghostbusters");
    }
};
filmCheck(favouriteFilms);
*/

/*
Task:
Create a while loop to generate random numbers,
until the number 50 is reached.
Use the random card suit generator as an example.
Research and be creative if you’re not sure
*/

/*
let numberSought = 50;
let current = 0;
while (current != numberSought) {
    console.log(current);
    current = Math.ceil(Math.random() * 50);
}
console.log(current);
*/