function Greatest_Common_Divisor(n2, n1) {

    while (n2) {
        let t = n2;
        n2 = n1 % n2;
        n1 = t;
    }
    console.log(n1)
}


Greatest_Common_Divisor(2154, 458 )