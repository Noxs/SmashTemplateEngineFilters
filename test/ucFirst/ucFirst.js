const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const UcFirst = require('../../lib/ucFirst/ucFirst.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('UcFirst', function () {
    it('UcFirst constructor: success', function () {
        const testFunc = function () {
            const ucFirst = new UcFirst();
        };
        expect(testFunc).to.not.throw();
    });

    it('UcFirst getName()', function () {
        const ucFirst = new UcFirst();
        assert.equal(ucFirst.getName(), "ucfirst");
    });

    it('UcFirst execute(): success', function () {
        const ucFirst = new UcFirst();
        assert.equal(ucFirst.execute("lowercase"), "Lowercase");
        assert.equal(ucFirst.execute("lowercase", {word:"parameter"}), "Parameter");
    });

    it('UcFirst execute(): failure', function () {
        const ucFirst = new UcFirst();
        const testFunc1 = function () {
            ucFirst.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            ucFirst.execute("this is a string", 2);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            ucFirst.execute("this is a string", {});
        };
        expect(testFunc3).to.throw(BadParameterError);
        
        const testFunc4 = function () {
            ucFirst.execute("this is a string", {word: 2});
        };
        expect(testFunc4).to.throw(BadParameterError);

    });
});