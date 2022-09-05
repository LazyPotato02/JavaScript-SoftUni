function piccolo(arr) {

    let garage = []
    for (let v of arr) {
        let [command, value] = v.split(', ')
        if (command === 'IN') {
            if (!(value in garage)) {
                garage.push(value)
            }
        } else if (command === 'OUT') {
            if (garage.includes(value)) {
                let idx = garage.indexOf(value)
                delete garage[idx]
            }
        }
    }
    let result = []
    for (v of garage){
        if (v !== undefined){
            result.push(v)
        }
    }
    if (result.length > 0){
        console.log(result.join('\n'))
    }else{
        console.log("Parking Lot is Empty")
    }
    
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])


piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)