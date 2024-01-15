function RoadRadar(speed,area){
    let speedLimits = {
        'motorway':130,
        'interstate':90,
        'city':50,
        'residential':20
    }



    if (area in speedLimits){
        let speedLimit = speedLimits[area]
        if (speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }else {
            let differenceInSpeed = speed - speedLimit
            let status
            if (differenceInSpeed <= 20){
                status = 'speeding'
            }else if (differenceInSpeed <= 40){
                status = 'excessive speeding'
            }else{
                status = 'reckless driving'
            }


            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        }

    }
}

// RoadRadar(40, 'city' )
RoadRadar(200, 'motorway' )