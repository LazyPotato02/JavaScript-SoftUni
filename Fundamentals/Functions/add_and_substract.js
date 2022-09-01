function addSubstract(nums){
    let total = 0
    function sum(){
        total = Number(nums[0]) + Number(nums[1])
    }
    function substract(){
        total = total - Number(nums[2])
    }
    sum()
    substract()

    console.log(total)
}

addSubstract([42,
    58,
    100])