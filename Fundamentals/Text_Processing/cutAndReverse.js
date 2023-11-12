function cutAndReverse(text){
    let cuttedString1 = text.slice(0,(text.length / 2))
    let cuttedString2 = text.slice((text.length/2), text.length)

    let result = [cuttedString1,cuttedString2]

    for (const resultElement of result) {
        let splitString = resultElement.split('')
        let reverseArray = splitString.reverse()
        let joinArr = reverseArray.join('')
        console.log(joinArr)
    }
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')