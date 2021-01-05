const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("Should return a string", () => {
        const input = "Hello"
        const actual = caesar(input);
        expect(actual).to.be.a("string");
    })
})

describe("caesar", () => {
    it("Should return a string shifted the correct amount", ()=>{
        const input = "Hello"
        const expected = "khoor"
        const actual = caesar(input, 3)
        expect(actual).to.equal(expected)
    })
})

describe("caesar", () => {
    it("Should return a string shifted the correct amount with spaces unchanged", ()=>{
        const input = "Hello World!!"
        const expected = "khoor zruog!!"
        const actual = caesar(input, 3)
        expect(actual).to.equal(expected)
    })
})

describe("caesar", () => {
    it("Should return a regular message when encode is set to false", ()=>{
        const input = "khoor zruog"
        const expected = "hello world"
        const actual = caesar(input, 3, false)
        expect(actual).to.equal(expected)
    })
})

describe("caesar", () => {
    it("Should wrap to the front of alphabet if shift goes pass 'z'", ()=>{
        const input = "XYZ"
        const expected = "abc"
        const actual = caesar(input, 3)
        expect(actual).to.equal(expected)
    })
})

describe("caesar", () => {
    it("Should wrap to the front of alphabet if shift goes pass 'a'", ()=>{
        const input = "ABC"
        const expected = "xyz"
        const actual = caesar(input, -3)
        expect(actual).to.equal(expected)
    })
})

describe("caesar", () => {
    it("Should return false if Shift is 0, greater that 25, or less than -25 ", ()=>{
        const input = "Hello World"
        const expected = false
        const actual = caesar(input, 0)
        expect(actual).to.equal(expected)
    })
})

