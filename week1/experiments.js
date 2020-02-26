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

let actualPIN = 1234;
let balance = 10000;
let withdrawn = 0;
let tries = 3;

const cashMachine = (PIN, request) => {
    if (tries === 0) {
        console.log("Locked; please contact your bank.");
    }
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