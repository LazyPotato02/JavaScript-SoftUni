function distinctArray(arr){
    let val = (arr.filter((item,
        index) => arr.indexOf(item) === index));

    console.log(...val)
}
distinctArray([1, 2, 3, 4])