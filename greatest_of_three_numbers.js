//code in js to find the greatest of three numbers

let num1 = 255;
let num2 = 170;
let num3 = 307;
//assign num1, num2 and num3 with other values and run the program to check the result.

if(num1 >= num2 && num1 >= num3) {
    console.log(num1, 'is the greatest.');
} else if(num2 >= num1 && num2 >= num3) {
    console.log(num2, 'is the greatest.');
} else {
    console.log(num3, 'is the greatest.');
}