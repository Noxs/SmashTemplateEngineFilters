const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const ToUpperCase = require('../../lib/toUpperCase/toUpperCase.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('ToUpperCase', function () {
    it('ToUpperCase constructor: success', function () {
        const testFunc = function () {
            const toUpperCase = new ToUpperCase();
        };
        expect(testFunc).to.not.throw();
    });

    it('ToUpperCase getName()', function () {
        const toUpperCase = new ToUpperCase();
        assert.equal(toUpperCase.getName(), "toUpperCase");
    });

    it('ToUpperCase execute(): success', function () {
        const toUpperCase = new ToUpperCase();
        assert.equal(toUpperCase.execute("lowercase"), "LOWERCASE");
        assert.equal(toUpperCase.execute("lowercase", { position: 0 }), "Lowercase");
        assert.equal(toUpperCase.execute("lowercase", { position: 1 }), "lOwercase");
    });

    it('ToUpperCase execute(): failure', function () {
        const toUpperCase = new ToUpperCase();
        const testFunc1 = function () {
            toUpperCase.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            toUpperCase.execute("this is a string", 2);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            toUpperCase.execute("this is a string", {});
        };
        expect(testFunc3).to.throw(BadParameterError);

        const testFunc4 = function () {
            toUpperCase.execute("this is a string", { position: "test" });
        };
        expect(testFunc4).to.throw(BadParameterError);

    });
});