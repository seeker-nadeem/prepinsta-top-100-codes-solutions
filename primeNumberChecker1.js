//code in js to check whether a no is a prime or not
//method2

let num = 10;
//assign num with other values and run the program to check the result.

if (num <= 1) {
    console.log("0, 1, and negative numbers aren't prime.");
} else if (num === 2) {
    console.log(`${num} is prime.`);
} else if (num % 2 === 0) {
    console.log(`${num} is not prime. (It's an even number other than 2.)`);
} else {
    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            isPrime = false;
            break; // Exit the loop once a divisor is found
        }
    }

    /*
        1.  By starting with i = 3 and incrementing i by 2 (i += 2) in each iteration, 
            the algorithm skips over all even numbers.
            This optimization is effective because even numbers (except for 2) cannot be prime.
            Using i += 2 instead of i++ effectively reduces the number of iterations in the loop by half, 
            as it avoids checking even numbers.
        2.  Math.sqrt() is used to calculate the square root of a number.
            When checking for divisors, you only need to check up to the square root of the number. 
            If a number is not prime, it must have a divisor that is less than or equal to its square root.
            If a number has a divisor larger than its square root, 
            then the corresponding divisor smaller than the square root would have already been checked.
            By limiting the loop to Math.sqrt(num), the algorithm becomes more efficient, 
            especially for larger numbers, 
            because you don't need to check beyond the square root for potential divisors.
    */

    if (isPrime) {
        console.log(`${num} is prime.`);
    } else {
        console.log(`${num} is not prime.`);
    }
}
