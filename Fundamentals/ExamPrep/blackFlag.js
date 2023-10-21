function solve(arr) {
    let days = Number(arr.shift()) //5
    let plunderForADay = Number(arr.shift()) // 40
    let expectedPlunder = Number(arr.shift()) // 100
    let totalPlundered = 0
    for (let i = 1; i <= days; i++) {
        let collectedPlunder = plunderForADay
        if (i % 3 == 0){
            collectedPlunder += plunderForADay / 2
        }
        totalPlundered += collectedPlunder
        if (i % 5 == 0){
            let lostPlunder = totalPlundered * 0.3
            totalPlundered -= lostPlunder
        }
        
    }

    if (totalPlundered > expectedPlunder){
        console.log(`Ahoy! ${totalPlundered.toFixed(2)} plunder gained.`)
    }else{
        let percentageNeeded = totalPlundered / expectedPlunder * 100
        console.log(`Collected only ${percentageNeeded.toFixed(2)}% of the plunder.`);
    }

}

// solve(["5",
//     "40",
//     "100"])
solve(["10",
    "20",
    "380"])
