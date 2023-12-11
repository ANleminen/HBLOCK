import at from '../src/at.js';
import chai from 'chai';

const { expect } = chai;

describe('at', () => {
    it('should return an array of values corresponding to the given paths', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const paths = ['a[0].b.c', 'a[1]'];
        const result = at(object, ...paths);
        expect(result).to.deep.equal([3, 4]);
    });

    it('should return an empty array if no paths are provided', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const result = at(object);
        expect(result).to.deep.equal([]);
    });

});
