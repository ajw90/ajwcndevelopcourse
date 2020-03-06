/*
var /function-scoped variable/;
let /block-scoped variable/;
const /block-scoped constant/;
A variable is a named location in memory at which data can be stored; naming allows this to be accessed throughout a program's execution.
A variale can be declared using the keywords, "let" and "var"; a constant is declared using the keyword, "const"; this should only be used
// when it is known that the value of the variable should not be changed throughout the course of the program. 
// "var" is older and should be replaced by let in modern JavaScript, wherever possible.
// JavaScript is a case-sensitive language. 
// JavaScript variable names cannot contain any more than one word; the common convention when required to do this is to use what is called camel-case; this 
// involves capitalizing all but the first word - unless this word has some other reason to be capitalized.
// The operator "+" can be used to chain strings together; this is called "concatenating" the strings.
*/

/*
let name = "Andrew Winters";
let age = 29;
let favouriteColour = "green";

console.log(name);
console.log(age);

console.log("My name is " + name + ".");
console.log("I am " + age + ".");
console.log("My favourite colour is " + favouriteColour + ".");
*/

/*
// Template strings (use backticks): `<ordinary characters> ${JS expression}`

let favouriteDrink = "something which changes quite often";

console.log(`My name is ${name}.`);
console.log(`I am ${age}.`);
console.log(`My favourite drink is ${favouriteDrink}, thank you.`);
*/

/*
let addUp = 2 + 2;
console.log(addUp);

let divide = 8 / 2;
console.log(divide);

let multiply = 2 * 2;
console.log(multiply);

let minusNum = 6 - 2;
console.log(minusNum);

console.log(addUp * minusNum);

let num = 2;
num += 2;

console.log(num);

// a <operator>= b := a = a <operator> b.
*/

// Variables Task ****************************************************************************************************************************************

// Task: create variables containing information; output a complete sentence using "console.log" containing the information stored in these variables;
// attempt to do this in an efficient and current way

/*
let name = "Andrew Winters";
let age = 29;
let favouriteColour = "green";

console.log(`Hello; my name is ${name}; I am ${age}, and my favourite colour is ${favouriteColour}.`);
*/

// Task: demonstrate the use of <operator>=:

/*
let num = 20; 

num += 5;
// Expect 25
console.log(num);

num *= 10;
// Expect 250
console.log(num);

num /= 10;
// Expect 25
console.log(num);

num -= 5;
// Expect 20
console.log(num);
*/

// Task: create a 3X3 grid and output this with values of 'x' and 'o' inserted into the grid using console.log, such that they match the following pattern:
// row 1: x, o, blank - row 2: x, x, blank - row 3: o, blank, blank

/*
let space1 = "x";
let space2 = "o";
let space3 = " ";

let space4 = "x";
let space5 = "x";
let space6 = " ";

let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");
*/

// Task: create and log variables for meals eaten yesterday; update them for today's meals, and log them again

/*
let breakfast = "porridge";
let lunch = "about 6 slices of cheese";
let dinner = "... pancakes (albeit one day early)";

console.log(`Yesterday, I had ${breakfast} for breakfast; then, for lunch, I had ${lunch}. Later on, I had ${dinner}.`);

// "let", "var", and "const" are only used when a variable or constant first appears in a program (declaration); when changing the value, this is not required.

breakfast = "a yoghurt";
lunch = "another yoghurt (this time with walnuts)";
dinner = "an omelette, probably";

console.log(
    `Today, I had ${breakfast} first; later on I will have ${lunch} for lunch; for tea, `
    + `I will have ${dinner}.`
);
*/