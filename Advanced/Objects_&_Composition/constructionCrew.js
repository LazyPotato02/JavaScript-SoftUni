function result(inp) {
    let weight = Number(inp['weight'])
    let experience = Number(inp['experience'])
    let levelOfHydrated = Number(inp['levelOfHydrated'])
    let dizziness = inp['dizziness']
    // Weight is expressed in kg
    // experience is in years
    // levelOfHydrated are expressed in milliliters
    // if dizziness is true it means he needs to intake some water
    // the required amount is 0,1ml per kg and per year of experience
    // the required amount must be added to the existing amount levelOfHydrated
    // once water is administered change dizziness to false
    if (dizziness){
        levelOfHydrated += 0.1 * weight * experience
        dizziness = false
    }
    return {
        weight: weight,
        experience: experience,
        levelOfHydrated: levelOfHydrated,
        dizziness: dizziness
    }
}

// result({ weight: 95,
//
//     experience: 3,
//
//     levelOfHydrated: 0,
//
//     dizziness: false } )

let worker = result({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
);

console.log(worker)