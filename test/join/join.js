const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Join = require('../../lib/join/join.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('Join', function () {
    it('Join constructor: success', function () {
        const testFunc = function () {
            const join = new Join();
            assert.equal(join.execute.length, 3);
        };
        expect(testFunc).to.not.throw();
    });

    it('Join getName()', function () {
        const join = new Join();
        assert.equal(join.getName(), "join");
    });

    it('Join execute(): success', function () {
        const join = new Join();
        assert.equal(join.execute(["this", "is", "an", "array"], { delimiter: ", " }), "this, is, an, array");
        assert.equal(join.execute("test", { delimiter: ", " }), "test");
    });

    it('Join execute(): failure', function () {
        const join = new Join();
        const testFunc1 = function () {
            join.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            join.execute("this is a string", 2);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            join.execute("this is a string", {});
        };
        expect(testFunc3).to.throw(BadParameterError);

    });
});