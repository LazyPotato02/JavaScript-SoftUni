function readtext(input) {
    let index = 0
    let word = input[0]

    while (word != 'Stop'){
        index += 1
        console.log(word)
        word = input[index]
    }

}
readtext(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"])