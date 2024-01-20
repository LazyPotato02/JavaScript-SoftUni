function carFactory(inp) {
    let model = inp['model']
    let power = Number(inp['power'])
    let color = inp['color']
    let carriage = inp['carriage']
    let wheelSize = Number(inp['wheelsize'])
    let volume = 0

    if (wheelSize % 2 === 0){
        wheelSize = wheelSize - 1
    }

    if (power <= 90){
        power = 90
        volume = 1800
    }else if(power <= 120){
        power = 120
        volume = 2400
    }else if(power <= 200) {
        power = 200
        volume = 3500
    }


    let engineObj = {
        power: power,
        volume: volume
    }
    let carriageObj = {
        type: carriage,
        color: color,
    }
    let wheelArray = Array(4).fill(wheelSize)


    let car  = {
        model:  model,
        engine: engineObj,
        carriage: carriageObj,
        wheels: wheelArray
    }
    return car
}


console.log(carFactory({    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17}))