// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;
const testAlpha = "zyxwvutsrqponmlkjihgfedcba"


describe("substitution", () => {
    it("Should return a string with characters correctly swapped", () => {
        const actual = substitution("hello", testAlpha)
        const expected = "svool"
        expect(actual).to.equal(expected)
    })
})

describe("substitution", () => {
    it("Should return a string with orginal message when encode is false", () => {
        const actual = substitution("svool", testAlpha, false)
        const expected = "hello"
        expect(actual).to.equal(expected)
    })
})

describe("substitution", () => {
    it("Should return a string with characters correctly swapped and spaces uneffected", () => {
        const actual = substitution("Hello World", testAlpha)
        const expected = "svool dliow"
        expect(actual).to.equal(expected)
    })
})

describe("substitution", () => {
    it("Should return false if alphabet chars aren't unique", () => {
        const actual = substitution("hello", "zyxwvutsrqpoynmlkjihgfedcb")
        const expected = false 
        expect(actual).to.equal(expected)
    })
})

describe("substitution", () => {
    it("Should return false if alphabet isnt excatlly 26 in length", () => {
        const actual = substitution("hello", "zyxwvutsrqponmlkjihgfedcb")
        const expected = false 
        expect(actual).to.equal(expected)
    })
})