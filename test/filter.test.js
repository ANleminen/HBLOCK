import filter from '../src/filter.js';
import chai from 'chai';

const expect = chai.expect;

describe('filter', () => {
    it('should return an array of elements that satisfy the predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];

        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });

    it('should return an empty array if no elements satisfy the predicate', () => {
        const users = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false }
        ];

        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([]);
    });

    it('should return a new array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = filter(array, () => true);
        expect(result).to.deep.equal(array);
    });
});
