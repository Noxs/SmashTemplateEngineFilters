const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Index = require('../index.js');

describe('Index', function () {
    it('Index', function () {
        assert.exists(Index.Date);
        assert.exists(Index.ForbiddenJsKeyword);
        assert.exists(Index.Join);
        assert.exists(Index.Plural);
        assert.exists(Index.Size);
        assert.exists(Index.ToLowerCase);
        assert.exists(Index.ToUpperCase);
        assert.exists(Index.Translator);
    });

});