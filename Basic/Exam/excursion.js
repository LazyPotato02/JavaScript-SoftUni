function excursion(input){
    let people_in_group = Number(input[0])
    let nights = Number(input[1])
    let transport_cards = Number(input[2])
    let museum_tickets = Number(input[3])

    let night = 20
    let transport_card = 1.60
    let museum_ticket = 6

    let total_nights = nights * night
    let total_transport = transport_cards * transport_card
    let total_museum_tickets = museum_tickets * museum_ticket

    let total_sum = total_nights + total_transport + total_museum_tickets
    total_sum = total_sum * people_in_group
    let bonus_money = total_sum * 0.25
    total_sum = total_sum + bonus_money

    console.log(total_sum.toFixed(2))


}
excursion(['131','9','33','46'])