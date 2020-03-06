/*
if (<condition>) {
    <do this if condition is true>
else if (<condition2>) {
    <do this, if condition2 is true>
}
...
[There is no limit to the number of "else if" statements that can be chained.]
...
} else {
    <do this if none of the conditions are true>
}

A condition is a JavaScript expression.

Comparison operators: 

a == b   -  a equals b in value
a === b  -  a equals b in type and value
a != b   -  a is not equal to b in value
a !== b  -  a is not equal to b in type and value

a > b    - a is greater than b
a < b    - a is less than b
a >= b   - a is greater than or equal to b
a <= b   - a is less than or equal to b
*/

/*
// The following should evaluate to false because 1 is a number, and "1" is a string. "===" compares equality of type as well as value.

if (1 === "1") {
    console.log(true);
}
else {
    console.log(false);
}

// This should evaluate to false because 1 and "1" are equal in value; "==" and "!=" test for value irrespective of type.

if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}
*/

/*
// Task:  Create a variable "age". Write an if statement that logs “Yes I can serve you” if age is greater than 17 and else
// logs “You aren’t old enough”.

let age = 29;

// Expect "Yes I can serve you."
if (age > 17) {
    console.log("Yes I can serve you.");
}
else {
    console.log("You aren't old enough.");
}

age = 16;

// Expect "You aren't old enough."
if (age > 17) {
    console.log("Yes I can serve you.");
}
else {
    console.log("You aren't old enough.");
}
*/

/*
Logical operators: 

condition1 && condition2 - true, only if both condition1 and condition2 are true
condition1 || condition2 - true, if either condition1 or condition2 (or both) is/are true
*/

// Task: create a new version of the above age checker, but include an additional test to confirm that a person's country of residence is The UK

/*
age = 18;
let country = "UK";

// Expect "Yes I can serve you."
if (age > 17 && country == "UK") {
    console.log("Yes I can serve you.");
}
else {
    console.log("You aren't old enough.");
}

country = "Elsewhere";

// Expect "You aren't old enough."
if (age > 17 && country == "UK") {
    console.log("Yes I can serve you.");
}
else {
    console.log("You aren't old enough.");
}
*/

/*
Task:
Create a variable called password.
Check how many letters are in the password, if there
are less than 8 log to the console that the password
is too short. Otherwise log the password to the
console
*/

/*
let password = "doNotUsePassword";

if (password.length < 8) {
    console.log("Password is too short.");
}
else {
    console.log(`You wrote: ${password}`);
}
*/

/*
Task: 
Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is log
“This number is divisible by 3 or 5” to the console.
Otherwise log “This number is not divisible by 3 or 5”.
*/

/*
let num = 60;

if ((num % 3) == 0 || (num % 5) == 0) {
    console.log("This number is divisible by 3 or 5.");
}
else {
    console.log("This number is not divisible by 3 or 5.");
}
*/

/*
Task: 
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s
divisible by 5 log “buzz” to the console, if it’s divisible
by both 3 and 5 log “fizz buzz” to the console.
Otherwise log num to the console.
*/

/*
let num = 0;

if ((num % 3) == 0) {
    if ((num % 5) == 0) {
        console.log("fizz buzz");
    }
    else {
        console.log("fizz");
    }
}
else if ((num % 5) == 0) {
    console.log("buzz");
}
else {
    console.log(num);
}
*/

/*
Task: 
Create a variable called time, a variable called placeOfWork
and a variable called townOfHome.
Create an if statement that logs to the console where someone
is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m
commuting, at 9 I’m at work.
*/

/*
let time = "23:00";
let placeOfWork = "Code Nation, Chester";
let townOfHome = "Frodsham";

if (time == "10:00") {
    console.log(`It is ${time}; I am at ${placeOfWork}.`);
}
else if (time == "15:00") {
    console.log(`It is ${time}; I am still at ${placeOfWork}.`);
}
else if (time == "18:00") {
    console.log(`It is ${time}; I am on my way home to ${townOfHome}`);
}
else if (time == "23:00") {
    console.log(`It is ${time}; I should be at home in ${townOfHome}`);
}
else {
    console.log("No info on whereabouts for time entered.");
}
*/

/*
Task: 
Create a variable called word that takes a string.
Create an if statement that checks if the last letter is
the same as the first. If it is return true, otherwise
return false.
*/

/*
let word = "Z ... <filler material> Z";

// In JS the last character of a string is at position (length - 1), as JS strings
// are indexed beginning at 0.
if (word[word.length - 1] === word[0]) {
    console.log(true);
}
else {
    console.log(false);
}
*/

/*
Task: 
Create two variables called num1 and num2.
Create an if statement that checks if the result of the
sum is even. If it is return the number, otherwise return
the numbers multiplied together.
*/

/*
let num1 = 4;
let num2 = 6;

if (((num1 + num2) % 2) == 0) {
    console.log(`The sum of the numbers is ${num1 + num2}, an even number.`);
}
else {
    console.log(`The product of the numbers is ${num1 * num2}`);
}
*/

/*
Task: 
Create a variable called num.
Check if the number is a palindrome (looks the same
forward as it does backwards e.g. 1001 or 20202).
*/

/*
let num = 201102;
let reversedNum = num.toString().split("").reverse().join("");

if (num.toString() == reversedNum) {
    console.log(`Number ${num.toString()} is a palindrome; backwards: ${reversedNum}.`);
}
else {
    console.log(`Number ${num} is not a palindrome.`);
}
*/

/*
Task: 
Take the string
“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
Find the index of a last vowel in the string.
*/

/*
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh" 
          + "gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let i;
for (i = str.length - 1; i >= 0; i--) {
    if (
            str[i] == "a" 
            || str[i] == "e" 
            || str[i] == "i" 
            || str[i] == "o" 
            || str[i] == "u"
    ) {
        console.log(`The last vowel, ${str[i]}, is at position ${i}.`);
        break;
    }
}
if (i < 0) {
    console.log("The string contains no vowels.");
}
*/

/*
Task: 
Write an if statement for the noughts and crosses task from variables.js; if the items on 
the top row meet are either all "o"s or all "x"s, then 
*/

/*
let space1 = "o";
let space2 = "o";
let space3 = "o";

let space4 = "x";
let space5 = "x";
let space6 = " ";

let space7 = "o";
let space8 = " ";
let space9 = "x";

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

if (space1 == ("o" || "x") && space1 == space2 && space2 == space3) {
    console.log(`Win; the top row is all "${space1}"s.`);
}
else {
    console.log("Fail.");
}
*/

/*
Task: 
Write an if statement that checks the ages of cinema goers:
- Child (below 18): £8
- Adult (18+): £10.95
- Senior (60+): £7.50
*/

/*
let age = 5;

if (age >= 18) {
    // Not a child
    if (age < 60) {
        // Adult
        console.log("Ticket: £10.95 (Adult)");
    }
    else {
        // Senior
        console.log("Ticket: £7.50 (Senior)");
    }
}
else {
    // Child
    console.log("Ticket: £8.00 (Child)")
}
*/