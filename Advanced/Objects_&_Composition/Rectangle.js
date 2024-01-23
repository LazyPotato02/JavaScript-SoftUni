function rectangle(width,height,color) {

    let firstLetter = color.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    let remainingLetters = color.slice(1)

    color = firstLetter + remainingLetters


    function calcArea() {
        return width * height
    }

    return {
        width:width,
        height:height,
        color:color,
        calcArea:calcArea
    }

}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);
//
console.log(rect.height);
//
console.log(rect.color);
//
console.log(rect.calcArea());