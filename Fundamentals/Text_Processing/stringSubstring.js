function stringSubstring(word,text) {
    let listOfText = text.split(' ')
    let isFound = false
    for (const listOfTextElement of listOfText) {
        if (word.toLowerCase() === listOfTextElement.toLowerCase()){
            isFound = true
            console.log(word)
        }
    }
    if (isFound === false){
        console.log(`${word} not found!`)
    }
}

stringSubstring('javaswcript',
    'JavaScript is the best programming language')