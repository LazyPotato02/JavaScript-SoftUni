function rounding(num,round){
    if (round > 15){
        round = 15
    }
    n = num.toFixed(round)
    console.log(parseFloat(n))
}
rounding(3.1415926535897932384626433832795,16)