function distinctArray(arr){
    console.log(arr.filter((item,
        index) => arr.indexOf(item) === index));
}
distinctArray([1, 2, 3, 4])