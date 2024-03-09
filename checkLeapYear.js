/*
Conditions for a Leap Year
For any year to be a leap year it must satisfy either of these conditions
1. Year must be divisible by 400.
2. Year must be divisible by 4 and not by 100 at the same time.
*/

let year = 2024;
//assign year with other values and run the program to check the result.

if(year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else if(year % 4 === 0 && year % 100 !== 0) {
    console.log(`${year} is a leap year.`); 
} else {
    console.log(`${year} is not a leap year.`);
}