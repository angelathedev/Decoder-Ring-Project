// Write your tests here!
const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return an encoded word after taking the word and shifting each letter to the right three places", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.eql(expected);
    })

    it("should return an encoded word after taking the word and shifting each letter to the left three places", () => {
        const actual = caesar("thinkful", -3);
        const expected = "qefkhcri";
        expect(actual).to.eql(expected);
    })

    it("should return a decoded word after taking the word and shifting each letter to the right three places", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";
        expect(actual).to.eql(expected);
    })

    it("should return an encoded message with spaces/special characters included and each letter shifted to the right eight places in lowercase letters", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected);
    })

    it("should return a decoded message spaces/special characters included and each letter shifted to the left eight places in lowercase letters", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.eql(expected);
    })

    it("should return false if the shift number is missing", () => {
        const actual = caesar("thinkful");
        const expected = false;
        expect(actual).to.eql(expected);

    })

    it("should return false if the shift number is greater than 25", () => {
        const actual = caesar("thinkful", 99);
        const expected = false;
        expect(actual).to.eql(expected);
    })

    it("should return false if the shift number is less than -25", () => {
        const actual = caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.eql(expected);
    })

})