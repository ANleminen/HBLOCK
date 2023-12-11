import difference from '../src/difference.js';
import chai from 'chai';

const expect = chai.expect;

describe('difference', () => {
    it('should return an array of values not included in the other given arrays', () => {
        const result = difference([2, 1], [2, 3]);
        expect(result).to.deep.equal([1]);
    });

    it('should return an empty array if all values are included in the other given arrays', () => {
        const result = difference([1, 2, 3], [1, 2, 3]);
        expect(result).to.deep.equal([]);
    });

    it('should return the original array if no other arrays are provided', () => {
        const result = difference([1, 2, 3]);
        expect(result).to.deep.equal([1, 2, 3]);
    });

    it('should handle multiple arrays as arguments', () => {
        const result = difference([1, 2, 3], [2, 3], [3, 4]);
        expect(result).to.deep.equal([1]);
    });

    it('should handle empty arrays', () => {
        const result = difference([], [1, 2, 3]);
        expect(result).to.deep.equal([]);
    });
});
