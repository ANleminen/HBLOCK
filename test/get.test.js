import get from '../src/get.js';
import chai from 'chai';

const { expect } = chai;

describe('get', () => {
    it('should return the value at the specified path', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.c')).to.equal(3);
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
    });

    it('should return the default value for undefined resolved values', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a.b.c', 'default')).to.equal('default');
    });
});


