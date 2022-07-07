function cake(input){
 
    let cakeWidth = Number(input[0]);
    let cakeLenght = Number(input[1]);
    let allCakePieces = cakeLenght * cakeWidth;
    let pieces = 0;
    let index = 2;
    let command = input[index];
 
    while (command !== `STOP`) {
        let cakeEaten = Number(command);
        pieces += cakeEaten;
 
        if (allCakePieces <= pieces){
            console.log(`No more cake left! You need ${pieces - allCakePieces} pieces more.`);
            break;
        }
        index++;
        command = input[index];  
    }
 
    if (command === `STOP`) {
        let cakeLeft = Number(input[index]);
        if (cakeLeft > 0){
        pieces += cakeLeft;
        }
        console.log(`${allCakePieces - pieces} pieces are left.`)
    }
}
cake(["10",

"2",

"2",

"4",

"6",

"STOP"])