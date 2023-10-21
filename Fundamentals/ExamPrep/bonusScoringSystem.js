function solve(arr) {
    let studentsCount = Number(arr.shift())
    let lecturesCount = Number(arr.shift())
    let additionalBonus = Number(arr.shift())


    let highest = 0;
    let attendedLectures = 0;

    for (let i = 0; i < studentsCount; i++) {

        let attendancy = Number(arr.shift());
        let totalBonus = Math.round(attendancy / lecturesCount * (5 + additionalBonus));
        if (totalBonus >= highest) {
            highest = totalBonus;
            attendedLectures = attendancy;
        }
    }
    console.log(`Max Bonus: ${highest}.`);
    console.log(`The student has attended ${attendedLectures} lectures.`);
}
solve(
    [
        '5', '25', '30',
        '12', '19', '24',
        '16', '20'
    ]
)
solve(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
    ]
)