
import words from '../src/words.js';
import chai from 'chai';


const expect = chai.expect;

describe('words', () => {
    it('should split a string into an array of words', () => {
        const result = words('fred, barney, & pebbles');
        expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it('should split a string into an array of words using a custom pattern', () => {
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });

    it('should return an empty array when the input string is empty', () => {
        const result = words('');
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array when the input string does not contain any words', () => {
        const result = words('   ');
        expect(result).to.deep.equal([]);
    });
});
