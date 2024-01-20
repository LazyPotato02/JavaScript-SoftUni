function constructionCrew(inp) {
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
    let person = {
        weight: weight,
        experience:experience,
        levelOfHydrated:levelOfHydrated,
        dizziness:dizziness
    }

    console.log(person)
}

constructionCrew({ weight: 95,

    experience: 3,

    levelOfHydrated: 0,

    dizziness: false } )