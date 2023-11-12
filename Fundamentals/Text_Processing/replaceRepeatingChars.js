function replaceRepeatingChars(string) {
    let chars = string.split('')
    let nonDuplicateChars = []
    let lastChar = ''
    for (const char of chars) {
        if (lastChar !== char){
            lastChar = char

            nonDuplicateChars.push(char)
        }

    }
    console.log(nonDuplicateChars.join(''))
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')