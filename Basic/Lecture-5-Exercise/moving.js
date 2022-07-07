function moving(input){
	var width = Number(input.shift());
	var length = Number(input.shift());
	var height = Number(input.shift());
	var volume = width*length*height;
	var movedCartons = 0;
 
	while(true){
		numCartons = Number(input.shift());
		if(isNaN(numCartons) || numCartons=="undefined" || numCartons=="Done"){
			break;
		}
		else{
			movedCartons+=numCartons;
		}
	}
 
	if(movedCartons>volume){
		console.log(`No more free space! You need ${Math.abs(movedCartons - volume)} Cubic meters more.`);
	}
	else console.log(`${Math.abs(movedCartons - volume)} Cubic meters left.`);
}
 
moving(["10",
"1",
"2",
"4",
"6",
"Done"])