import { assert, should } from "chai";
import { sayHello } from "../app.js";
import { addNumbers } from "../app.js";

describe('App',()=>{
    describe('sayHello', ()=>{
        it('should return Hello', ()=>{
            assert.equal(sayHello(),'Helloo')
        })

        it('should return type string',()=>{
            let result = sayHello();
            assert.typeOf(result,'string')
        })
    })
    let result = addNumbers(3,7)
    describe('addNumbers', ()=>{
        it('should be above 5', ()=>{
            assert.isAbove(result,5)
        })

        it('should be type number',()=>{
            // let result = addNumbers(6,3);
            assert.typeOf(result,'number')
        })
    })
})