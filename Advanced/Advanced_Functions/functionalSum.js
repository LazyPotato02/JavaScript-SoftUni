function add(a) {
    let total = 0;
    total += Number(a)
    function sum(b) {
        if (typeof total === 'number'){
            total += Number(b);
        }

        sum.toString = () => total;
        return sum;
    }
    return sum

}
console.log(Number(add(1)(6)(-3)(-3)))
//expect(Number(result(1)(6)(-3))).to.equal(4, "Incorrect sum.");
console.log(Number(add(1)));