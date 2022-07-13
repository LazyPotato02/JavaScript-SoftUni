function trainers(input) {
    let joury = Number(input.shift())
    let gradesF = 0
    let counter = 0
    while (true) {
        command = input.shift()

        if (command === 'Finish') {
            break;
        }
        subject = command
        grades = 0
        for (i = 1; i <= joury; i++) {
            grade = Number(input.shift())
            grades += grade
        }
        grades = grades / joury;
        gradesF += grades;
        counter++;
        console.log(`${subject} - ${grades.toFixed(2)}.`);

    }

    gradesF = gradesF / counter
    console.log(`Student's final assessment is ${gradesF.toFixed(2)}.`)

}
trainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])