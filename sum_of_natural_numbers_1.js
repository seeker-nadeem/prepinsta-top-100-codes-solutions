//code in js to find the sum of n natural numbers
//method 2 : using loop

function sumOfNaturalNos(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
        //we can also write above line as : sum = sum + i;
    }
    return sum;
}

let n = 10;
//assign n with other values and run the program to check the result.
let result = sumOfNaturalNos(n);
console.log(`Sum of first ${n} natural numbers is ${result}`);


