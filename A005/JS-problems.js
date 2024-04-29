let a = 8;
let b = 30;
let primes = "";
let flag = 0;
for (let i = a; i <= b; i++) {
    if (i > 1) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 0;
                break;
            } else {
                flag = 1;
            }
        }
        if (flag == 1) {
            primes += i + " ";
        }
    }
}
console.log(`Prime numbers between ${a} and ${b} are: ${primes}`);

// ----------------------------------------------------------------------------------

// Write a program to check whether the given number is odd or even.
// Where if the number is odd the color of result button should be changed to RED whereas even changes to GREEN

function checkOddEven() {
    let num = document.getElementById("num").value;
    let result = document.getElementById("result");
    if (num % 2 == 0) {
        result.style.backgroundColor = "green";
        result.innerHTML = "Even";
    } else {
        result.style.backgroundColor = "red";
        result.innerHTML = "Odd";
    }
}
// -------------------------------------------------------------

str = "Hello World";
len_str = str.length;
console.log(len_str);

