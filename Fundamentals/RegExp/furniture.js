
function solution(text) {
    let regEx = new RegExp("[>]+([A-Z]*[a-z]*)[<]+(\\d+\\.?\\d*|\\d)!(\\d+)")
    let totalPrice = 0
    console.log('Bought furniture:')
    while (text.length > 0){
        let val = text.shift()
        if(regEx.test(val)){
            let product = val.match(regEx)[1]
            console.log(product)
            let price = val.match(regEx)[2]
            let quantity = val.match(regEx)[3]
            totalPrice += Number(price) * Number(quantity)
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}

solution(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)