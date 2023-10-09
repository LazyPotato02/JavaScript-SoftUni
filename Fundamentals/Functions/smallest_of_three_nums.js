function smallestNumbers(num1,num2,num3) {
    let nums = [Number(num1),Number(num2),Number(num3)]
    const min = Math.min(...nums)
    console.log(min)
}
smallestNumbers(2,
    5,
    3)
