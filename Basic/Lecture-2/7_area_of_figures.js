function area_of_figures(input) {
    let figure = input[0];
    if (figure == "square") {
        let side = Number(input[1])
        let result = side ** 2
        console.log(result.toFixed(3))
    } else if (figure == "rectangle") {
        let side_1 = Number(input[1])
        let side_2 = Number(input[2])
        let result = side_1 * side_2
        console.log(result.toFixed(3))
    } else if (figure == "circle") {
        let radius = Number(input[1])
        radius = Math.PI * radius * radius;
        console.log(radius.toFixed(3))
    } else if (figure == "triangle") {
        let len = Number(input[1])
        let height = Number(input[2])
        let result = len * height / 2
        console.log(result.toFixed(3))
    }
}

area_of_figures(["square", "5"])
area_of_figures(["rectangle", "7","2.5"])
area_of_figures(["circle", "6"])
area_of_figures(["triangle", "4.5","20"])