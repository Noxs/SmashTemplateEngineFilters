const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Slice = require('../../lib/slice/slice.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('Slice', function () {
    it('Slice constructor: success', function () {
        const testFunc1 = function () {
            const slice = new Slice();
        };
        expect(testFunc1).to.not.throw();
    });

    it('Slice getName()', function () {
        const slice = new Slice();
        assert.equal(slice.getName(), "slice");
        assert.equal(slice.execute.length, 3);
    });

    it('Slice execute(): success case #1', function () {
        const slice = new Slice();
        assert.equal(slice.execute("a_string_in_ascii"), "a_string_in_ascii");
    });

    it('Slice execute(): success case #2', function () {
        const slice = new Slice();
        assert.equal(slice.execute("a_string_in_ascii", { start: 0, end: 8 }), "a_string");
    });

    it('Slice execute(): success case #3', function () {
        const slice = new Slice();
        assert.equal(slice.execute("a_string_in_ascii", { start: 9, end: 11 }), "in");
    });

    it('Slice execute(): success case #4', function () {
        const slice = new Slice();
        assert.equal(slice.execute("a_string_in_ascii", { start: 9 }), "in_ascii");
    });

    it('Slice execute(): success case #5', function () {
        const slice = new Slice();
        assert.equal(slice.execute("a_string_in_ascii", { start: 0, end: 100 }), "a_string_in_ascii");
    });

    it('Slice execute(): failure', function () {
        const slice = new Slice();
        const testFunc1 = function () {
            slice.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            slice.execute(1);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            slice.execute({});
        };
        expect(testFunc3).to.throw(BadParameterError);
    });
});
