import {assert} from 'chai';
import {isOddOrEven} from "../evenOrOdd.js";
import {mathEnforcer} from "../mathEnforcer.js";


describe("test addFive", () => {
    it("test with invalid value",() =>{
        assert.isUndefined(mathEnforcer.addFive('twaaw'),"return value must be undefined")
        assert.isUndefined(mathEnforcer.addFive([]),"return value must be undefined")
        assert.isUndefined(mathEnforcer.addFive('5'),"return value must be undefined")

    })
    it("test with valid value",() =>{
        assert.equal(mathEnforcer.addFive(-10),-5,"value is correct")
        assert.equal(mathEnforcer.addFive(-5),0,'value is correct')
        assert.equal(mathEnforcer.addFive(4.61),9.61,'value is correct')
    })
})

describe("test subtractTen", () => {
    it("test with invalid value",() =>{
        assert.isUndefined(mathEnforcer.subtractTen('twaaw'),"return value must be undefined")
        assert.isUndefined(mathEnforcer.subtractTen([]),"return value must be undefined")
        assert.isUndefined(mathEnforcer.subtractTen('5'),"return value must be undefined")

    })
    it('test with valid value', () => {
        assert.equal(mathEnforcer.subtractTen(-10),-20,"value is correct")
        assert.equal(mathEnforcer.subtractTen(-5),-15,'value is correct')
        assert.equal(mathEnforcer.subtractTen(5.55),-4.45,'value is correct')

    });
})

describe("test sum", () => {
    it("test with invalid value",() =>{
        assert.isUndefined(mathEnforcer.sum('twaaw','afwfwa'),"return value must be undefined")
        assert.isUndefined(mathEnforcer.sum([],24),"return value must be undefined")
        assert.isUndefined(mathEnforcer.sum('5',14),"return value must be undefined")
    })
    it('test with valid value', () => {
        assert.equal(mathEnforcer.sum(-10,20),10,"value is correct")
        assert.equal(mathEnforcer.sum(0,5),5,'value is correct')
        assert.equal(mathEnforcer.sum(3.33,3.33),6.66,'value is correct')

    });
})