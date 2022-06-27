function titles(input) {
    let age = input[0]
    let gender = input[1]

    if (gender == 'f'){
        if (age >= 16){
            console.log('Ms.');
        }else{
            console.log('Miss');
        }
    }else{
        if (age >= 16){
            console.log('Mr.');
        }else{
            console.log('Master');
        }
    }  
}
titles(["12","f"])