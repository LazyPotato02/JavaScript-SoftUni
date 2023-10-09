function offEvenSum(num) {

    function sum(array) {
        let sum = 0

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum
    }


    let oddNumbers = []
    let evenNumbers = []
    let numString = String(num)
    let splitedNum = numString.split('')
    for (el of splitedNum) {
        if (el % 2 === 0) {
            evenNumbers.push(Number(el))
        } else {
            oddNumbers.push(Number(el))
        }
    }

    oddsum = sum(oddNumbers)
    evensum = sum(evenNumbers)

    console.log(`Odd sum = ${oddsum}, Even sum = ${evensum}`)
}


offEvenSum(3495892137259234)