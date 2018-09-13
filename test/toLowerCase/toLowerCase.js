const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const ToLowerCase = require('../../lib/toLowerCase/toLowerCase.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('ToLowerCase', function () {
    it('ToLowerCase constructor: success', function () {
        const testFunc = function () {
            const toLowerCase = new ToLowerCase();
        };
        expect(testFunc).to.not.throw();
    });

    it('ToLowerCase getName()', function () {
        const toLowerCase = new ToLowerCase();
        assert.equal(toLowerCase.getName(), "toLowerCase");
    });

    it('ToLowerCase execute(): success', function () {
        const toLowerCase = new ToLowerCase();
        assert.equal(toLowerCase.execute("UPPERCASE"), "uppercase");
        assert.equal(toLowerCase.execute("UPPERCASE", { position: 0 }), "uPPERCASE");
        assert.equal(toLowerCase.execute("UPPERCASE", { position: 1 }), "UpPERCASE");
    });

    it('ToLowerCase execute(): failure', function () {
        const toLowerCase = new ToLowerCase();
        const testFunc1 = function () {
            toLowerCase.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            toLowerCase.execute("this is a string", 2);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            toLowerCase.execute("this is a string", {});
        };
        expect(testFunc3).to.throw(BadParameterError);

        const testFunc4 = function () {
            toLowerCase.execute("this is a string", { position: "test" });
        };
        expect(testFunc4).to.throw(BadParameterError);

    });
});