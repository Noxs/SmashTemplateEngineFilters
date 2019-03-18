const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Base64 = require('../../lib/base64/Base64.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('Base64', function () {
    it('Base64 constructor: success', function () {
        const testFunc1 = function () {
            const base64 = new Base64();
        };
        expect(testFunc1).to.not.throw();
    });

    it('Base64 getName()', function () {
        const base64 = new Base64();
        assert.equal(base64.getName(), "base64");
    });

    it('Base64 execute(): success', function () {
        const base64 = new Base64();
        assert.equal(base64.execute("a_string_in_base_64"), Buffer.from("a_string_in_base_64").toString('base64'));
    });

    it('Base64 execute(): failure', function () {
        const base64 = new Base64();
        const testFunc1 = function () {
            base64.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            base64.execute(1);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            base64.execute({});
        };
        expect(testFunc3).to.throw(BadParameterError);

    });
});
