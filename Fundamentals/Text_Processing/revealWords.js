function revealWords(wordtoReplace,sentence){
    let sent = sentence.split(' ')
    let words = wordtoReplace.split(', ')
    for (v of sent){
        if (v.includes('*')){
            let idx = sent.indexOf(v)
            let word = words.shift()
            sent[idx] = word
        }
    }
    console.log(sent.join(' '))
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)