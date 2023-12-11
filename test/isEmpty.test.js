import isEmpty from '../src/isEmpty.js';
import chai from 'chai';

const { assert } = chai;

describe('isEmpty', () => {
    it('should return true for empty values', () => {
        assert.isTrue(isEmpty(null));
        assert.isTrue(isEmpty(true));
        assert.isTrue(isEmpty(1));
        assert.isTrue(isEmpty([]));
        assert.isTrue(isEmpty(''));
        assert.isTrue(isEmpty(new Map()));
        assert.isTrue(isEmpty(new Set()));
        assert.isTrue(isEmpty({}));
    });

    it('should return false for non-empty values', () => {
        assert.isFalse(isEmpty([1, 2, 3]));
        assert.isFalse(isEmpty('abc'));
        assert.isFalse(isEmpty({ 'a': 1 }));
        assert.isFalse(isEmpty(new Map([['a', 1]])));
        assert.isFalse(isEmpty(new Set([1, 2, 3])));
    });
});
