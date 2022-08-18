function table(input) {
    let n1 = String(input).slice(-1)
    let n2 = String(input).slice(1, -1)
    let n3 = String(input).slice(0, 1)
    n1 = Number(n1)
    n2 = Number(n2)
    n3 = Number(n3)

    for (let x = 1; x <= n1; x++) {
        for (let y = 1; y <= n2; y++) {
            for (let z = 1; z <= n3; z++) {
                console.log(`${x} * ${y} * ${z} = ${x*y*z};`)
            }
        }

    }
}

table(["222"])