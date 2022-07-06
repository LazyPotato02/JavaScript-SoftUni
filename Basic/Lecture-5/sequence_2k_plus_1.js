function sequence(input){
    let num = Number(input[0])

    let result = 0
    while (result <= num){

        result = (result * 2) + 1
        if (result > num){
            break
        }
        console.log(result)
        
    }
}
// sequence(["3"])
// sequence(["8"])
// sequence(["17"])