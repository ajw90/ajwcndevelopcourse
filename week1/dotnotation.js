/*
// "<object>.<property>" accesses "property" on "object"; a method is like a verb; a data property is like a noun.

console.log("Hello, world.");
console.log("Foo Bar, Fizz Buzz, etc.");

console.log("Hello ".length);

"<string>.toUpperCase" is a method which capitalizes the string on which the method is called.
console.log("hello".toUpperCase());

console.log(Math.floor(Math.random()*10));
*/

/*
// Task: create a 3X3 grid using only "console.log"

console.log("      |       |      ");
console.log("      |       |      ");
console.log("      |       |      ");
console.log("- - - - - - - - - - -");
console.log("      |       |      ");
console.log("      |       |      ");
console.log("      |       |      ");
console.log("- - - - - - - - - - -");
console.log("      |       |      ");
console.log("      |       |      ");
console.log("      |       |      ");

// A variation on the preceding:

console.log(" - - - - - - - - - - - ");
console.log("|      |       |      |");
console.log("|      |       |      |");
console.log("|      |       |      |");
console.log(" - - - - - - - - - - - ");
console.log("|      |       |      |");
console.log("|      |       |      |");
console.log("|      |       |      |");
console.log(" - - - - - - - - - - - ");
console.log("|      |       |      |");
console.log("|      |       |      |");
console.log("|      |       |      |");
console.log(" - - - - - - - - - - - ");
*/

/*
// Task: Display the 8th character of a string in upper case

console.log("The 8th character of the string, 'All Around The World', in upper case is");
console.log("All Around the World."[7].toUpperCase());
// Alternatively: 
console.log("All Around the World".charAt(7).toUpperCase());

// In programming, generally, arrays are indexed starting at 0; therefore, when searching for the nth character, we would look for <array>[n - 1].
// JavaScript strings are indexable as arrays. 
*/

/*
// Task: demonstrate the use of the string methods toUpperCase and toLowerCase

console.log("Using 'toUpperCase', 'I am a string.' becomes");
console.log("'I am a string.'".toUpperCase());
console.log("Using 'toLowerCase', 'I AM A STRING.' becomes");
console.log("'I AM A STRING.'".toLowerCase());
*/

/*
// Task: demonstrate the use of the string method, "trim"

console.log("Using the method, 'trim', the string, '   I am a string   ' becomes");
console.log("   I am a string   ".trim());
console.log("The three whitespace characters placed either side of the initial string are absent from the result.");
*/