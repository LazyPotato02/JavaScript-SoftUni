function graduation(input) {
    let name = input[0]
    let grade = input[1]
    let index = 1
    let total_grade = 0
    let count = 0
    let fails = 0
    while ('a' === 'a') {

        if (grade === undefined) {
            break
        }

        if (Number(grade) >= 4) {
            total_grade += Number(grade);
            count++;
            fails = 0
        }else if (Number(grade) <=4){
            fails++
        }

        if (fails == 2){
            break
        }

        index++;
        grade = input[index];
    }


    if (count == 12){
        grade = total_grade / 12
        grade = grade.toFixed(2)
        console.log(`${name} graduated. Average grade: ${grade}`)
    }else{
        console.log(`${name} has been excluded at ${count + 1} grade`)
    }

}
graduation(["Mimi",
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

