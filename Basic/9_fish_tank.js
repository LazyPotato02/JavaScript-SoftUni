function fish_tank(input){
    len_cm = Number(input[0])
    width_cm = Number(input[1])
    height_cm = Number(input[2])
    percent = Number(input[3])

    let cubic = len_cm * width_cm * height_cm
    let litres = cubic / 1000
    let filled_percent = percent / 100
    let needed_liters = litres * (1 - filled_percent)
    console.log(needed_liters)
}



fish_tank(["85 ","75 ","47 ","17 "])