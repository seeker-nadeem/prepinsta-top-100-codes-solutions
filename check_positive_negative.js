//code in js that checks if a number is positive or negative
//method 1

let num = 8;
//assign num with other values and run the program to check the result.

if(num === 0) {
    console.log('The given number is zero.');
} else {
    if(num > 0) {
        console.log(num, 'is a positive number.');
    } else {
        console.log(num, 'is a negative number.');
        //If you are familiar with string interpolation, you can also write the above line as:
        //console.log(`${num} is a negative number`);
    }
}

