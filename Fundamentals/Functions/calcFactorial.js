function solve(num1, num2) {
    function factorial(n) {
        let answer = 1;
        if (n == 0 || n == 1) {
            return answer;
        }
        else if (n > 1) {
            for (var i = n; i >= 1; i--) {
                answer = answer * i;
            }
            return answer;
        }

    }
    let numOne = factorial(num1)
    let numTwo = factorial(num2)

    console.log((numOne / numTwo).toFixed(2))
}

solve(6,
2)