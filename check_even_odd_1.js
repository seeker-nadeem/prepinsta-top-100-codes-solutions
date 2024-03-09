//write a JavaScript code to check whether a number is even or odd.
//method 2 using function decleration

function checkEvenOdd(num) {
    if(num % 2 === 0) {
        console.log(`${num} is an even number.`);
    } else {
        console.log(`${num} is an odd number.`);
    }
}

checkEvenOdd(5);
checkEvenOdd(0);
checkEvenOdd(8);



