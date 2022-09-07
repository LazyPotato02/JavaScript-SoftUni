function modernTimes(sentence){
    let sent = sentence.split(' ')
    for (v of sent){
        if (v.includes('#')&& v.length > 1){
            let temp = v.split('')
            let result = temp.splice(1,temp.length-1)
            console.log(result.join(''))

        }
    }
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')