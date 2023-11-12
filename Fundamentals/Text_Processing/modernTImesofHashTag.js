function modernTimes(sentence){
    let sent = sentence.split(' ')
    for (let word of sent){
        if (word.startsWith('#') && word.length > 1){
            word = word.slice(1)
            let onlyChars = true
            for (let i = 0; i < word.length; i++) {
                let word1 = word.toUpperCase()
                if (word1[i].charCodeAt(0) < 65 || word1[i].charCodeAt(0) > 90){
                    onlyChars = false
                    break
                }
            }
            if (!(onlyChars === false)){
                console.log(word)
            }
        }
    }
}
// modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variou2sly in English-speaking #regions as the #number sign')
