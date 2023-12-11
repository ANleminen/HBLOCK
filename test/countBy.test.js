import countBy from '../src/countBy.js';
import chai from 'chai';

const assert = chai.assert;

describe('countBy', () => {
    it('should return an object with the count of each key returned by the iteratee', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ];

        const result = countBy(users, value => value.active);
        assert.deepEqual(result, { 'true': 2, 'false': 1 });
    });

    it('should return an empty object if the collection is empty', () => {
        const collection = [];
        const result = countBy(collection, value => value);
        assert.deepEqual(result, {});
    });

    it('should return an object with the count of each key returned by the iteratee function', () => {
        const collection = [1, 2, 3, 4, 5];
        const result = countBy(collection, value => value % 2 === 0 ? 'even' : 'odd');
        assert.deepEqual(result, { 'odd': 3, 'even': 2 });
    });
});
