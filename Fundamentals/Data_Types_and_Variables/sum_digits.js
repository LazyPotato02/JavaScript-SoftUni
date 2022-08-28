function sumDigits(num) {
    num = String(num)
    let n = 0
    for (let i = 0; i < String(num).length; i++) {
        n_str = String(num[i])
        n += Number(n_str)
    }
    console.log(n)
}
sumDigits(97561)