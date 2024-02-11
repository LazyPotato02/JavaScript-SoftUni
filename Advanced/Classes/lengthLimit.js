class Stringer {
    constructor(singleString,length) {
        this.innerString = singleString
        this.innerLength = Number(length)
        this.results = []
    }

    increase(length){
        this.innerLength += Number(length)
    }
    decrease(length){
        if((this.innerLength - Number(length)) < 0){
            this.innerLength = 0

        }else{
            this.innerLength -= Number(length)
        }

    }
    toString(){
        let result = this.innerString.slice(0,this.innerLength)
        if (this.results.includes(result) || result === ''){
            return '...'
        }else{
            return result

        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test