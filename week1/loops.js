/*
Notes: 
A loop enables us to perform the same sequence of code several times over multiple
iterations.

Syntax:

// For loop:
for (<exp initial run once>; <exp test before each>; <exp after each>) {
    <code>
}

// While loop:

*/

/*
Task:
Create an array of your favourite films; add 2 more using a method; using a for loop,
traverse the array.
*/

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

