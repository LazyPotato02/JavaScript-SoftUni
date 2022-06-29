function solve(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumbers = [];
    for (let i = n; i < m; i++) {
        if (i % 9 === 0) {
            sum += i
            outputNumbers.push(i)
        }
    }
    console.log(`The sum: ${sum}`);
    let ll_len = outputNumbers.length
    for (let i = 0; i < ll_len; i++) {
        console.log(outputNumbers[i]);
    }
}

solve(["100", "200"])