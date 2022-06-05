function schoolMaterials(input) {
    let pens = Number(input[0]) * 5.80
    let markers = Number(input[1]) * 7.20
    let cleaning_chems = Number(input[2]) * 1.20
    let sum = (pens + markers + cleaning_chems)
    let discount = (Number(input[3]) / 100) * sum
    sum = sum - discount


    console.log(sum)
}

schoolMaterials(["2 ", "3 ", "4 ", "25 "])