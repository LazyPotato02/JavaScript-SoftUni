function isInvalidNumber(input){
    let number = input[0]

    if  (100 <= number && number <= 200 || number == 0){
        // console.log('valid')
        //pass
    }else{
        console.log('invalid')
    }

}
isInvalidNumber(["120"])