/*
let fact = (n) => {
    let result = 1;    
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        let i;
        for (i = 2; i <= n; i++) {
            result *= i;
        }
    }
    return result;
};

let perm = (n, r) => {
    if (r === 0) {
        return 1;
    }    
    return fact(n) / fact(n - r);
};

let comb = (n, r) => {
    if (r === 0) {
        return 1;
    }
    return perm(n, r) / r;
};
*/

/*
let actualPIN = 1234;
let balance = 10000;
let tries = 3;

const cashMachine = (PIN, request) => {
    if (tries === 0) {
        console.log("Locked; please contact your bank.");
        return 0;
    }
    if (PIN !== actualPIN) {
        // PIN wrong; do not give any info
        tries--;
        console.log(`You entered PIN, ${PIN}; invalid - tries remaining: ${tries}.`);
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

console.log(cashMachine(1234, 500000));
console.log(cashMachine(1234, 5000));
console.log(cashMachine(1234, 10));
cashMachine(123, 10);
cashMachine(123, 10);
cashMachine(123, 10);
cashMachine(123, 10);
cashMachine(1234, 10);
cashMachine(1234, 10);
*/

/*
let me = 
{
    name: "Andrew",
    age: 29,
    profession: "pending",
    change: function (name, age, profession) {
        this.name = name || this.name;
        this.age = age || this.age;
        this.profession = profession || this.profession;
    },
    intro: function () {
        console.log(`My name is ${this.name}, and I am ${this.age}. Profession? ${this.profession}.`);
    }
};

me.intro();
me.change("Andrew Winters");
me.intro();
*/

/*
const Department = class {
    constructor (name, employees, budget) {
        this.name = name;
        this.employees = employees;
        this.budget = budget;
    }
    report () {
        console.log(
            `This financial year, ${this.name} has ${this.employees} employees ` 
            + `and an allocated budget of £${this.budget}.`
        );
    }

};
let treasury = new Department("HMRC", 45000, 124000000000);
let env = new Department("DEFRA", 8032, 12e9);
treasury.report();
env.report();
*/

/*
let i = 0;
let stop = setInterval(
    () => {
        if (i > 10) {
            clearInterval(stop);
        }
        else {
            console.log(i++);
        }
    },
    800
);
*/

/*
const wait = (milliseconds, callback, args) => {
    const start = Date.now();
    while (Date.now() - start < milliseconds) 
        ;
    return callback(args);
};

wait(
    3000,
    (args) => {
        console.log(`Name: ${args.name} - Age: ${args.age}`);
    },
    {
        name: "A. Winters",
        age: "29"
    }
);
// Expect 9
console.log(
    wait(
        4000,
        (args) => {
            return args.a + args.b;
        },
        {
            a: 2, b: 7
        }
    )
);
*/

// Dynamic property naming:

/*
let numbers = {};
let i;
for (i = 0; i < 11; i++) {
    numbers[`theNumber${i}`] = i;
}
console.log(numbers);
*/