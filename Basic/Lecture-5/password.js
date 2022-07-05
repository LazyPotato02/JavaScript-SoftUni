function passWord(input){
    let user = input[0]
    let password_1 = input[1]
    let password_2 = input[2]
    let index = 2
    while (password_1 !== password_2){
        index++
        password_2 = input[index]
    }
    console.log(`Welcome ${user}!`)
}
passWord(["Nakov","1234","Pass","1324","1234"])