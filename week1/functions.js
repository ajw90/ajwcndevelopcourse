/*
Notes: 
Functions allow us to break code up into smaller parts and attach names to these snippets of
code for reuse.

Syntax: 

<let/const/var> <function name> = (<parameters>) => {
    <code run when the function is called>
};

<function name>(<parameter values>) // This calls <function name>

Parameters are listed and passed to the function as a comma-separated list.

Given function, 

    x (a, b) => {...}, 
    
calling 

    x(c, d)

ensures that the function is called with a = c and b = d.
*/

/*
Task: 
Create a function that takes two parameters for a coffee order (size, type of drink)
*/

/*
const orderCoffee = (size, typeOfDrink) => {
    console.log(`Your order: 1 ${size} ${typeOfDrink}.`);
};

// Calls to the function: 
orderCoffee("large", "Latte");
orderCoffee("medium", "Americano");
orderCoffee("small", "Cappucino");
orderCoffee("very large", "Green tea");
*/

/*
Task:
Write a function that takes name, age, and favourite colour and log them to the console in a
complete sentence.
*/

/*
const introduceYourself = (name, age, favouriteColour) => {
    console.log(
        `My name is ${name}; I am ${age}, and my favourite colour is ${favouriteColour}.`
    );
};

introduceYourself("Andrew Winters", 29, "green");
introduceYourself("Mr X", "1000", "white");
*/

/*
Task: 
Make a sandwich order function with as many parameters as you like; each one is a different 
filling
*/

/*
const sandwichOrder = (filling1, filling2, filling3, filling4) => {
    console.log(
        "Your ordered a sandwich with the following fillings: "
        + `${filling1}, ${filling2}, ${filling3}, ${filling4}.`
    );
};

sandwichOrder("egg", "bacon", "tomato", "pesto");
sandwichOrder("brie", "beef", "crushed walnuts", "cranberry sauce");
*/

/*
Notes:
Indentation is a good/vital mechanism for making code readable.

Variable scope: 

Global: visible to the whole program 
Local: only visible to the function or block in which is declared (variables declared within a block or
       function with "let", "var", or "const")

Return statement: 
 
return <value>; 

"<value>" is made available to the rest of the program; "<value>" is the value of a function call.

Function parameters are local to a function; they cannot be seen outside of it.

Aside: Celcius to Fahrenheit = C(9/5) + 32 - 5/9(F-32)

There are multiple function syntaxes in JavaScript; USE the arrow syntax (except when you don't)!

function <function name> (<parameters>) {<code>} // old declaration syntax
function (<parameters>) {<code>} // (anonymous function)
(<parameters>) => {<code>} // anonymous arrow function

argument = value passed to function.

These use the same syntax in other respects.
*/

/*
Task: 
Here's an example of a function that includes a parameter.
Parameters are responsible for functions being able to work on different
data inputs. Edit the snippet below to include two parameters and a
running order count updated when the function is called :
let orderCount = 0;
const takeOrder = (topping) => {
 console.log(`Pizza with ${topping}`);
 orderCount++;
}
takeOrder("pineapple");
*/

/*
let orderCount = 0;
const takeOrder = (topping, crust) => {
    orderCount++;
    console.log(`Order ${orderCount}: ${topping} with ${crust} crust`);    
};

takeOrder("Ham & Pineapple", "normal");
takeOrder("Four Cheese", "garlic-butter-stuffed");
takeOrder("Seafood", "mature-cheddar-stuffed");
*/

/*
Task:
Cash machine time. Let’s create one that :
dispenses cash if your pin number is correct and your balance is equal
to, or more than, the amount you’re trying to withdraw.
Be creative!
*/

/*
let actualPIN = 1234;
let balance = 10000;
let withdrawn = 0;

const cashMachine = (PIN, request) => {
    if (PIN !== actualPIN) {
        // PIN wrong; do not give any info
        console.log(`You entered PIN, ${PIN}; invalid`);
        return 0;
    }
    else if (request > balance) {
        console.log(`You requested £${request}; insufficient balance`);
        return 0;
    }
    else {
        console.log(`You requested £${request}; please take your cash`);
        balance -= request;
        console.log(`Remaining balance: £${balance}`);
        return request;
    }
};

withdrawn += cashMachine(123, 1000);
console.log(`Cash withdrawn: £${withdrawn}`);
withdrawn += cashMachine(1234, 50000);
console.log(`Cash withdrawn: £${withdrawn}`);
withdrawn += cashMachine(1234, 5000);
console.log(`Cash withdrawn: £${withdrawn}`);
withdrawn += cashMachine(1234, 5000);
cashMachine(1234, 1);
console.log(`Cash withdrawn: £${withdrawn}`);
*/

/*
Task: 
Create a function to subtract two parameters
*/

/*
const subtract = (a, b) => {
    return a - b;
};
// Expect 92
console.log(subtract(100, 2));
*/

/*
Task: 
Create a function to divide two parameters
*/

/*
const divide = (a, b) => {
    return a / b;
};
// Expect 3
console.log(divide(6, 2));
*/

/* 
Task: 
Convert one of the above to use function declaration syntax; convert the other to use the function 
keyword syntax
*/

/*
// Declaration:
function subtract (a, b) {
    return a - b;
}
// Expect -10
console.log(subtract(60, 70));

// Using the function keyword:
const divide = function (a, b) {
    return a / b;
};
// Expect 15
console.log(divide(30, 2));
*/


