function Solve(destinations, sortingCriteria) {

    let destinationArr = []
    class Ticket {
        constructor(destination,price,status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    for (let destination of destinations) {
        let [place,price,status] = destination.split('|')
        let destinationClass = new Ticket(place,price,status)
        destinationArr.push(destinationClass)
    }
    if (sortingCriteria === 'destination'){
        return destinationArr.sort((a, b) => a.destination.localeCompare(b.destination))
    }else if (sortingCriteria === 'price'){
        return destinationArr.sort((a, b) => a - b)
    }else if (sortingCriteria === 'status'){
        return destinationArr.sort((a, b) => a.status.localeCompare(b.status))
    }
}

// console.log(Solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'))
//
// console.log(Solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'))
console.log(Solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'))