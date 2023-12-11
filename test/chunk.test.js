import chunk from '../src/chunk.js';
import chai from 'chai';

const expect = chai.expect;

describe('chunk', () => {
    it('should split the array into chunks of specified size', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 2);
        expect(result).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });

    it('should handle the case when array cannot be split evenly', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 3);
        expect(result).to.deep.equal([['a', 'b', 'c'], ['d']]);
    });

    it('should return an empty array when the input array is empty', () => {
        const result = chunk([], 2);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array when the input array is null', () => {
        const result = chunk(null, 2);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array when the input array is undefined', () => {
        const result = chunk(undefined, 2);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array when the input array is not an array', () => {
        const result = chunk('abc', 2);
        expect(result).to.deep.equal([]);
    });

    it('should split the array into chunks of size 1 by default', () => {
        const result = chunk(['a', 'b', 'c', 'd']);
        expect(result).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
    });
});
