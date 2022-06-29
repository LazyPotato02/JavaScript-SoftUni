function powerOf2withN(input){
    n = Number(input[0])

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0){
            console.log(2 ** i)
        }
    }
}
powerOf2withN(["6"])
