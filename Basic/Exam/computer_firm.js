function computer(input){
    let n_computers = Number(input.shift())
    let ratings = 0
    let counter = 0
    let solds = 0
    for(let i = 0; i < n_computers; i++){
        let pc = Number(input.shift())
        let rating = String(pc).slice(-1)
        rating = Number(rating)
        let win_number = String(pc).slice(0,-1)
        win_number = Number(win_number)
        let winning = 1
        switch(rating){
            case 2:
                winning = 0
                break;
            case 3:
                winning = 0.50
                break;
            case 4:
                winning = 0.70
                break;
            case 5:
                winning = 0.85
                break;
        }

        let sold = win_number * winning
        solds += sold
        ratings += rating
        counter++
    }

    let avg_rating = ratings / counter
    console.log(solds.toFixed(2))
    console.log(avg_rating.toFixed(2))


}

computer(["2",
"204",
"206"])