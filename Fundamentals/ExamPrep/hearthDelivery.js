function solve(params) {

    let neightHearths = params.shift().split('@').map(Number)
    let currentHouse = 0
    let command = params.shift()
    while (command !== 'Love!') {

        let jumpIndex = Number(command.split(' ')[1])
        currentHouse += jumpIndex
        if (!(currentHouse < neightHearths.length)) {
            currentHouse = 0
        }
        
        if (neightHearths[currentHouse] <= 0) {
            console.log(`Place ${currentHouse} already had Valentine's day.`)
        } else if (neightHearths[currentHouse] - 2 == 0) {
            console.log(`Place ${currentHouse} has Valentine's day.`)
        }
        neightHearths[currentHouse] -= 2


        command = params.shift()

    }
    console.log(`Cupid's last position was ${currentHouse}.`)
    if (neightHearths.every(el => el === 0)) {
        console.log("Mission was successful.")
    } else {
        let leftHouses = 0
        for (let i = 0; i < neightHearths.length; i++) {
            if (neightHearths[i] > 0) {
                leftHouses++
            }

        }
        console.log(`Cupid has failed ${leftHouses} places.`);
    }
}
// solve(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"])
solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])