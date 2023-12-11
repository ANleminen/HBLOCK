import endsWith from '../src/endsWith.js';
import chai from 'chai';

const expect = chai.expect;

describe('endsWith', () => {
    it('should return true if string ends with target', () => {
        expect(endsWith('abc', 'c')).to.be.true;
    });

    it('should return false if string does not end with target', () => {
        expect(endsWith('abc', 'b')).to.be.false;
    });

    it('should return true if string ends with target up to a specific position', () => {
        expect(endsWith('abc', 'b', 2)).to.be.true;
    });
});
