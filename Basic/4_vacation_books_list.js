function vacation_book(input) {
    let pages_count = Number(input[0])
    let pages_per_h = Number(input[1])
    let days = Number(input[2])

    let sum = (pages_count / pages_per_h) / days
    console.log(sum)
}

vacation_book(["212", "20", "2"])