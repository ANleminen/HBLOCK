import get from '../src/get.js';
import chai from 'chai';

const { assert } = chai;

describe('get', () => {
    it('should return the value at the specified path', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };

        assert.strictEqual(get(object, 'a[0].b.c'), 3);
        assert.strictEqual(get(object, ['a', '0', 'b', 'c']), 3);
    });

    it('should return the default value for undefined resolved values', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };

        assert.strictEqual(get(object, 'a.b.c', 'default'), 'default');
        assert.strictEqual(get(object, 'x.y.z', 'default'), 'default');
    });
});
