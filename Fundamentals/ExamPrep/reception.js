function solve(arr) {
    let firstEmployee = Number(arr.shift())
    let secondEmployee = Number(arr.shift())
    let thirdEmployee = Number(arr.shift())
    let totalAnsweredStudsPerH = firstEmployee + secondEmployee + thirdEmployee
    let studentsCount = Number(arr.shift())
    let neededHours = 0
    while (studentsCount > 0) {
        studentsCount -= totalAnsweredStudsPerH
        console.log(studentsCount);
        neededHours++

        if (neededHours % 4 == 0) {
            neededHours++

        }
    }

    console.log(`Time needed: ${neededHours}h.`)
}

// solve(['5', '6', '4', '20'])
solve(['1','2','3','45'])
// solve(['3','2','5','40'])
