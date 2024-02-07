import {assert} from 'chai';
import {describe} from 'mocha'
import {isOddOrEven} from "../evenOrOdd.js";

describe("isOddOrEven", () => {
    it("test with non string value",() =>{
        assert.equal(isOddOrEven({prop: 'Test'}),undefined, 'return type must be undefined')
        assert.equal(isOddOrEven(5),undefined,'return type must be undefined')
        assert.isNotOk(isOddOrEven([]),'return type must be undefined')
    })
    it("test with valid string",() =>{
        assert.equal(isOddOrEven('Test1'),'odd', 'return type must be odd')
        assert.equal(isOddOrEven('Test'),'even','return type must be even')
    })
})