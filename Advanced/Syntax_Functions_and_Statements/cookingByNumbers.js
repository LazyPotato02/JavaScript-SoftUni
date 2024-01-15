function CookingByNumbers(num, com1, com2, com3, com4, com5) {

    let number = num

    function chop() {
        number = number / 2
    }

    function dice() {
        number = Math.sqrt(number)
    }

    function spice() {
        number += 1
    }


    function bake() {
        number *= 3
    }

    function fillet() {
        let twentyPercentOfNum = number * 0.2
        number = number - twentyPercentOfNum
    }

    let coms = {
        'chop': chop,
        'dice': dice,
        'spice': spice,
        'bake': bake,
        'fillet': fillet
    }


    let commList = [
        com1,
        com2,
        com3,
        com4,
        com5
    ]
    for (let commListElement of commList) {
        if (commListElement in coms) {
            coms[commListElement]()
            console.log(number)
        }
    }


}

CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet' )