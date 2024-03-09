//code in js that checks if a number is positive or negative
//method 3 using function decleration

//assign num with other values and run the program to check the result.

function checkPositiveNegative(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log(`Zero`);
    }
}

//Call functions with different arguments and check the results
checkPositiveNegative(0);
checkPositiveNegative(9);
checkPositiveNegative(-11);




