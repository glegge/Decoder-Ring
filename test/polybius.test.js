// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("Should return a string", () => {
        const input = "Hello"
        const actual = polybius(input);
        expect(actual).to.be.a("string");
    })
})

describe("polybius", () => {
    it("Should return a string of letters changed to the correct postions", () => {
        const input = "HelloHello"
        const actual = polybius(input);
        const expected = "32511313433251131343"
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("Should return a string of postions changed to the correct letters", () => {
        const input = "32511313433251131343"
        const actual = polybius(input, false);
        const expected = "hellohello"
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("Should return a string of postions changed to the correct letters while ingoning spaces", () => {
        const input = "3251131343 3251131343"
        const actual = polybius(input, false);
        const expected = "hello hello"
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("Should return 42 for a input of i or j", () => {
        const input = "ij"
        const actual = polybius(input);
        const expected = "4242"
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("Should return (i/j) for a input of 42", () => {
        const input = "42"
        const actual = polybius(input, false);
        const expected = "(i/j)"
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("Should return false if string of numbers isn't even disregarding spaces", () => {
        const input = "42 2"
        const actual = polybius(input, false);
        const expected = false
        expect(actual).to.equal(expected);
    })
})
