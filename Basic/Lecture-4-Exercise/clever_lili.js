function cleverLily(input) {
    let age = Number(input[0]);
    let wmPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toy = 0
    let countableYears = 0
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            countableYears++
        } else {
            toy++
        }
    }
    let money = (2 * 10 + (countableYears - 1) * 10) * countableYears / 2 - countableYears + toy * toyPrice

    let diff = Math.abs(wmPrice - money)
    if (wmPrice <= money) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}