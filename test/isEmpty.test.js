import isEmpty from '../src/isEmpty.js';
import chai from 'chai';

const expect = chai.expect;

describe('isEmpty', () => {
    it('should return true for empty values', () => {
        expect(isEmpty(null)).to.be.true;
        expect(isEmpty(true)).to.be.true;
        expect(isEmpty(1)).to.be.true;
        expect(isEmpty([])).to.be.true;
        expect(isEmpty('')).to.be.true;
        expect(isEmpty(new Map())).to.be.true;
        expect(isEmpty(new Set())).to.be.true;
    });

    it('should return false for non-empty values', () => {
        expect(isEmpty([1, 2, 3])).to.be.false;
        expect(isEmpty('abc')).to.be.false;
        expect(isEmpty({ 'a': 1 })).to.be.false;
        expect(isEmpty(new Map([['a', 1]]))).to.be.false;
        expect(isEmpty(new Set([1, 2, 3]))).to.be.false;
    });
});
