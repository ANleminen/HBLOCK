import countBy from '../src/countBy.js';
import chai from 'chai';

const expect = chai.expect;

describe('countBy', () => {
    it('should return an object with the count of each key returned by the iteratee', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ];

        const result = countBy(users, value => value.active);
        expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
    });

    it('should return an empty object if the collection is empty', () => {
        const collection = [];
        const result = countBy(collection, value => value);
        expect(result).to.deep.equal({});
    });

    it('should return an object with the count of each key returned by the iteratee function', () => {
        const collection = [1, 2, 3, 4, 5];
        const result = countBy(collection, value => value % 2 === 0 ? 'even' : 'odd');
        expect(result).to.deep.equal({ 'odd': 3, 'even': 2 });
    });
});
