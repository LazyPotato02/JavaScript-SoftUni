function charactersRange(char1,char2){

    let chars = [char1,char2]
    let firstChar = chars[0].charCodeAt(0)
    let secondChar = chars[1].charCodeAt(0)
    let charsFinal = []
    if (firstChar < secondChar)
        for (let i = firstChar + 1; i < secondChar; i++){
            let char = String.fromCharCode(i)
            charsFinal.push(char)
    }else if (firstChar > secondChar){
        for (let i = secondChar + 1; i < firstChar; i++){
            let char = String.fromCharCode(i)
            charsFinal.push(char)
        }
    }
    console.log(...charsFinal)

}
charactersRange('C',
'#')