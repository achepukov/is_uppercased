const isUppercased = require('../isUppercased');
const assert = require('assert'); 

describe('isUppercased', () => {

    describe('truthy', () => {
        it('A', () => {
            assert.equal(isUppercased('Abcd'), true);
        });
        it('Z', () => {
            assert.equal(isUppercased('Zbcd'), true);
        });
    });
    describe('falsy', () => {
        it('empty string', () => {
            assert.equal(isUppercased(''), false);
        });
        it('not a string', () => {
            assert.equal(isUppercased(NaN), false);
            assert.equal(isUppercased({}), false);
            assert.equal(isUppercased(null), false);
            assert.equal(isUppercased(), false);
            assert.equal(isUppercased(1), false);
            assert.equal(isUppercased(68), false);
        });
        it('not capital', () => {
            assert.equal(isUppercased('abcd'), false);
            assert.equal(isUppercased('zbcd'), false);
        });
    });
});