const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Plural = require('../../lib/plural/plural.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('Plural', function () {
    it('Plural constructor: success', function () {
        const testFunc = function () {
            const plural = new Plural();
        };
        expect(testFunc).to.not.throw();
    });

    it('Plural getName()', function () {
        const plural = new Plural();
        assert.equal(plural.getName(), "plural");
    });

    it('Plural execute(): success', function () {
        const plural = new Plural();
        assert.equal(plural.execute("arch"), "arches");
        assert.equal(plural.execute("buzz"), "buzzes");
        assert.equal(plural.execute("alley"), "alleys");
        assert.equal(plural.execute("ally"), "allies");
        assert.equal(plural.execute("calf"), "calves");
        assert.equal(plural.execute("knife"), "knives");
        assert.equal(plural.execute("buffalo"), "buffaloes");
        assert.equal(plural.execute("bluff"), "bluffs");
        assert.equal(plural.execute("index"), "indexes");
    });

    it('Plural execute(): failure', function () {
        const plural = new Plural();
        const testFunc1 = function () {
            plural.execute(2);
        };
        expect(testFunc1).to.throw(BadParameterError);
    });
});