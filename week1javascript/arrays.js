/*
Notes:
An array is a list of values.

Syntax:

An array of length n:

[<value1 at 0>, <value2 at 1>, ... <value n at (n - 1)>]

Accessing elements: 

<array>[<index>] // gets the address at <index> // this is the (n - 1)th item

Indexing begins at 0.

array.length // This property gives the number of elements in the array; the last element is at (array.length - 1)
*/

/*
let favouriteSongs = [
    "song 1 by artists",
    "song 2 by another artist",
    "song 3 by yet another artist"
];

console.log(favouriteSongs);
favouriteSongs[1] = "Probably something slightly embarrassing";
console.log(favouriteSongs);

console.log(favouriteSongs.length);

// .push(x, ...) adds x to the end of the array, increasing .length by 1; it returns the new .length.
favouriteSongs.push("The Song That Never Ends");
console.log(favouriteSongs);

// .pop() removes (and returns) the last item from the end, decreasing .length by 1.
favouriteSongs.pop();
console.log(favouriteSongs);

// .shift() removes (and returns) the first item from position 0, shuffling all elements down by 1.
favouriteSongs.shift();
console.log(favouriteSongs);

// .unshift(x, ...) adds x to position 0, shifting all other elements up by 1; it returns the new .length.
console.log(favouriteSongs.unshift("new element"));
console.log(favouriteSongs);
*/

/*
Task:
Create a list of favourite websites (3); use methods to add another two; then, remove the last one.
*/

/*
let favouriteWebsites = [
    "Youtube.com",
    "Wikipedia.com",
    "Quora.com"
];
console.log(favouriteWebsites);

favouriteWebsites.push("moneysavingexpert.com", "medium.com");
console.log(favouriteWebsites);

favouriteWebsites.pop();
console.log(favouriteWebsites);
*/

/*
Task:
Create a program demonstrating the uses of the methods, .shift, .unshift, .slice, .splice, and others; note where the
methods alter the array as opposed to returning a new value.
*/

/*
let letters = ["x", "y", "z"]; 
console.log(letters);
console.log(letters[2]);

// .shift removes the 0th element of the array and returns it; this moves all the elements' indices down by 1.
letters.shift();
console.log(letters);
// Note: "z" is now at position 1 instead of 2
console.log(letters[1]);

// .unshift(x, ...) 1 or more elements to the beginning of the array, shifting other elements' indices up by 1.
letters.unshift("a");
console.log(letters);
// Note: "z" is now back at position 2
console.log(letters[2]);

letters.push("b", "c", "d", "e");
console.log(letters);

// .slice(start, end) returns a new array consisting of the elements of the original array from start up to end
// if end is omitted, the slice is taken to the end of the array.   
// Expect ['z', 'b', 'c'] - this is the sub-array from index 2 through 4
console.log(letters.slice(2, 5));
// Note: the original array is not changed:
console.log(letters);

// .splice(start, count, ...) removes count elements starting at position start (inclusive); it then adds 
// in any other arguments at this position in the array; this method changes the original array.
letters.splice(2, 3, "j", "k", "l", "m");
// This moves to position 2; removes "z", "b", and "c"; and adds "j", "k", "l", "m" at position 2.
// The elements of the array have their indices shifted automatically.
console.log(letters);

// .indexOf(x) returns the first index at which x is stored; returns -1 if the element is absent from the array.
// Expect 2
console.log(letters.indexOf("j"));
// Expect 7
console.log(letters.indexOf("e"));
// Expect -1
console.log(letters.indexOf("r"));

// .join(x) returns a new string (the array is unaltered) consisting of the elements of the array (converted to strings
// if necessary) and joined using the character, x; a comma is used if x is left blank.
console.log(letters.join());
console.log(letters.join(", and then "));
console.log(letters.join(" :) :) :) "))
// The original array is unchanged:
console.log(letters);
*/