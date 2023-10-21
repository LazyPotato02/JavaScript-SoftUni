function solve(vals) {
    let days = 1


    let food = Number(vals.shift()) * 1000
    let hay = Number(vals.shift()) * 1000
    let cover = Number(vals.shift()) * 1000
    let pigWeight = Number(vals.shift()) * 1000
    while (days <= 30) {

        food -= 300
        if (days % 2 == 0) {
            let neededHay = food * 0.05
            hay -= neededHay
        }
        if (days % 3 == 0) {
            let oneThirdOfWeight = pigWeight / 3
            cover -= oneThirdOfWeight
        }

        days++
    }
    food = (food / 1000).toFixed(2)
    hay = (hay / 1000).toFixed(2)
    cover = (cover / 1000).toFixed(2)

    if (food > 0 && hay > 0 && cover > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${food}, Hay: ${hay}, Cover: ${cover}.`);
    }else{
        console.log("Merry must go to the pet store!");
    }
}
solve((["10",
    "5",
    "5.2",
    "1"]))
solve((["1",
"1.5",
"3",
"1.5"]))
solve((["9",
"5",
"5.2",
"1"]))