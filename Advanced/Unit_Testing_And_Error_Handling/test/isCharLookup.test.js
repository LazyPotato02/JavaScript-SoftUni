import {assert} from 'chai';
import {describe} from 'mocha'

import {lookupChar} from "../charLookup.js";


describe("char lookup",() =>{
    it('check if not string',() =>{
        assert.equal(lookupChar({prop: 'Test'}),undefined,'return type must be undefined')
        assert.equal(lookupChar(5),undefined,'return type must be undefined')
        assert.isNotOk(lookupChar([]),'return type must be undefined')
    })
    it('check index', () =>{
        assert.isOk(lookupChar('asd',4),'Incorrect index')
        assert.isOk(lookupChar('asd',-1),undefined)
        assert.isNotOk(lookupChar('asd',2.5),undefined)
    })
    it('check if char at correct index', () => {
        assert.equal(lookupChar('asd',1),'s', 'char not in correct index')
        assert.equal(lookupChar('was',1),'a','char not in correct index')
        assert.equal(lookupChar('awfawfa',1),'w','char not in correct index')
    });
})