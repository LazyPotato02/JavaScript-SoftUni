function sameNumbers(num) {
    let firstArr = String(num)
        .split('')
        .map(Number)

    console.log(firstArr.every(n => n === firstArr[0]))
    let totalSum = 0
    let sumOfAllDigits = firstArr.forEach(n => totalSum += n)
    console.log(totalSum)
}

sameNumbers(2222222)
sameNumbers(1234)