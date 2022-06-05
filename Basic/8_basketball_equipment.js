function basketball_equipment(input) {
    let yearly_tax = Number(input[0])
    let sneakers = yearly_tax - (yearly_tax * 0.40)
    let clothes = sneakers - (sneakers * 0.20)
    let ball = clothes / 4
    let accessories = ball / 5

    let total = yearly_tax + sneakers + clothes + ball + accessories
    console.log(total)
}

basketball_equipment(["365"])