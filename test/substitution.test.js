// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should return an encoded string of letters", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.eql(expected);
    })

    it("should return an encoded string of letters, including spaces", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    })

    it("should return a decoded string of letters ", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.eql(expected);
    })

    it("should return an encoded string of letters and special characters", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.eql(expected);
    })

    it("should return a decoded string of letters and special characters", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.eql(expected);
    })

    it("should return false if the alphabet string is less than 26 letters", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.eql(expected);
    })

    it("should return false if the alphabet has repeated letters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.eql(expected);
    })

    it("should return false if there is no alphabet input", () => {
        const actual = substitution("bbcbbccc");
        const expected = false;
        expect(actual).to.eql(expected);
    })
})