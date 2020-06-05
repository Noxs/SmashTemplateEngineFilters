const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const ForbiddenJsKeyword = require('../../lib/forbiddenJsKeyword/forbiddenJsKeyword.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('ForbiddenJsKeyword', function () {
    it('ForbiddenJsKeyword constructor: success', function () {
        const testFunc1 = function () {
            const forbiddenJsKeyword = new ForbiddenJsKeyword();
            assert.equal(forbiddenJsKeyword.execute.length, 3);
        };
        expect(testFunc1).to.not.throw();
        const testFunc2 = function () {
            const forbiddenJsKeyword = new ForbiddenJsKeyword("Value");
        };
        expect(testFunc2).to.not.throw();
    });

    it('ForbiddenJsKeyword getName()', function () {
        const forbiddenJsKeyword = new ForbiddenJsKeyword();
        assert.equal(forbiddenJsKeyword.getName(), "forbiddenJsKeyword");
    });

    it('ForbiddenJsKeyword execute(): success', function () {
        const forbiddenJsKeyword = new ForbiddenJsKeyword();
        assert.equal(forbiddenJsKeyword.execute("package"), "packageObject");
        assert.equal(forbiddenJsKeyword.execute("for"), "forObject");

        const forbiddenJsKeywordCustomSuffix = new ForbiddenJsKeyword("Test");
        assert.equal(forbiddenJsKeywordCustomSuffix.execute("package"), "packageTest");
        assert.equal(forbiddenJsKeywordCustomSuffix.execute("for"), "forTest");
    });

    it('ForbiddenJsKeyword execute(): failure', function () {
        const forbiddenJsKeyword = new ForbiddenJsKeyword();
        const testFunc1 = function () {
            forbiddenJsKeyword.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            forbiddenJsKeyword.execute(1);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            forbiddenJsKeyword.execute({});
        };
        expect(testFunc3).to.throw(BadParameterError);

    });
});