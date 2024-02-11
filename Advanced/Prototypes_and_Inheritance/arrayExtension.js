(function () {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    Array.prototype.skip = function (n) {
        return this.slice(n, this.length)
    }
    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }
    Array.prototype.sum = function () {
        let result = 0
        for (let x of this) {
            result += Number(x)
        }
        return result
    }
    Array.prototype.average = function () {
        let avg = 0
        for (let x of this) {
            avg += Number(x)
        }
        return avg / this.length
    }

}())

let myArr = [1, 2, 3,4,5,6,7,8]
// console.log(myArr.last())
// console.log(myArr.skip(1))
// console.log(myArr.take(5))
console.log(myArr.sum())
console.log(myArr.average())
