function palindrome(array){
    for (num of array){
        let original = num
        let n = String(num)
        n = n.split('')
        n = n.reverse()
        n = n.join('')
        n = Number(n)
        if (original === n){
            console.log('true')
        }else{
            console.log('false')
        }
    }
    

}
palindrome([32,2,232,1010])