function addSubstract(num1,num2,num3){
    let total = 0
    let nums = [Number(num1),Number(num2),Number(num3)]
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

addSubstract(42,
    28,
    100)