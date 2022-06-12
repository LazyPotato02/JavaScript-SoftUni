function even_or_odd(input){
    let num1 = Number(input[0]);
    if (num1 % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

even_or_odd(["2"])