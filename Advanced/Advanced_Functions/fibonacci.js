function result() {
    let num1 = 0;
    let num2 = 1;
    let sum;
    function fubCalc() {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum
        return num1
    }

    return fubCalc



}



let fib = result();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13