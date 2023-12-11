import compact from "../src/compact.js";
import chai from "chai";

const expect = chai.expect;

describe("compact", () => {
    it("should remove all falsey values from the array", () => {
        const input = [0, 1, false, 2, "", 3, undefined, null, NaN];
        const expectedOutput = [1, 2, 3];
        const result = compact(input);
        expect(result).to.deep.equal(expectedOutput);
    });

    it("should return an empty array if all values are falsey", () => {
        const input = [false, null, 0, "", undefined, NaN];
        const expectedOutput = [];
        const result = compact(input);
        expect(result).to.deep.equal(expectedOutput);
    });

    it("should return the same array if all values are truthy", () => {
        const input = [1, "hello", true];
        const expectedOutput = [1, "hello", true];
        const result = compact(input);
        expect(result).to.deep.equal(expectedOutput);
    });

    it("should return an empty array if the input is an empty array", () => {
        const input = [];
        const expectedOutput = [];
        const result = compact(input);
        expect(result).to.deep.equal(expectedOutput);
    });
});
