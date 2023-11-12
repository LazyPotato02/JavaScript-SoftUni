function revealWords(wordToReplace, text) {
    let words = wordToReplace.split(', ')
    let symbol = '*'
    for (let word of words) {
        let symb = symbol.repeat(Number(word.length))
        text = text.replace(symb, word)
    }
    console.log(text)
}

revealWords('learning, great',
    'softuni is ***** place for ******** new programming languages'
)