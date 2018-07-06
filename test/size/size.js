const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Size = require('../../lib/size/size.js');
const Translator = require('../../lib/translator/translator.js');
const BadParameterError = require('../../lib/badParameterError.js');

const translator = new Translator({
    'B': {
        en: 'B',
        fr: 'o',
        de: 'B'
    },
    'KB': {
        en: 'KB',
        fr: 'Ko',
        de: "KB"
    },
    'MB': {
        en: 'MB',
        fr: 'Mo',
        de: "MB"
    },
    'GB': {
        en: 'GB',
        fr: 'Go',
        de: "GB"
    },
    'TB': {
        en: 'TB',
        fr: 'To',
        de: "TB"
    },
    'PB': {
        en: 'PB',
        fr: 'Po',
        de: "PB"
    }
});

describe('Size', function () {

    it('Size constructor: success', function () {
        const testFunc = function () {
            const size = new Size(translator);
        };
        expect(testFunc).to.not.throw();
    });

    it('Size constructor: failure', function () {
        const testFunc = function () {
            const size = new Size("");
        };
        expect(testFunc).to.throw(BadParameterError);
    });

    it('Size getName()', function () {
        const size = new Size(translator);
        assert.equal(size.getName(), "size");

    });


    it('Size execute(): success', function () {
        const size = new Size(translator);

        translator.setLanguage("en");
        assert.equal(size.execute(1), "1 B");
        assert.equal(size.execute(10), "10 B");
        assert.equal(size.execute(100), "100 B");
        assert.equal(size.execute(1000), "1 KB");
        assert.equal(size.execute(10000), "10 KB");
        assert.equal(size.execute(100000), "100 KB");
        assert.equal(size.execute(1000000), "1 MB");
        assert.equal(size.execute(10000000), "10 MB");
        assert.equal(size.execute(100000000), "100 MB");
        assert.equal(size.execute(1000000000), "1 GB");
        assert.equal(size.execute(10000000000), "10 GB");
        assert.equal(size.execute(100000000000), "100 GB");
        assert.equal(size.execute(1000000000000), "1 TB");
        assert.equal(size.execute(10000000000000), "10 TB");
        assert.equal(size.execute(100000000000000), "100 TB");
        assert.equal(size.execute(1000000000000000), "1 PB");
        assert.equal(size.execute(10000000000000000), "10 PB");
        assert.equal(size.execute(100000000000000000), "100 PB");
        assert.equal(size.execute(102754321), "102.7 MB");

        translator.setLanguage("fr");
        assert.equal(size.execute(1), "1 o");
        assert.equal(size.execute(10), "10 o");
        assert.equal(size.execute(100), "100 o");
        assert.equal(size.execute(1000), "1 Ko");
        assert.equal(size.execute(10000), "10 Ko");
        assert.equal(size.execute(100000), "100 Ko");
        assert.equal(size.execute(1000000), "1 Mo");
        assert.equal(size.execute(10000000), "10 Mo");
        assert.equal(size.execute(100000000), "100 Mo");
        assert.equal(size.execute(1000000000), "1 Go");
        assert.equal(size.execute(10000000000), "10 Go");
        assert.equal(size.execute(100000000000), "100 Go");
        assert.equal(size.execute(1000000000000), "1 To");
        assert.equal(size.execute(10000000000000), "10 To");
        assert.equal(size.execute(100000000000000), "100 To");
        assert.equal(size.execute(1000000000000000), "1 Po");
        assert.equal(size.execute(10000000000000000), "10 Po");
        assert.equal(size.execute(100000000000000000), "100 Po");
        assert.equal(size.execute(102754321), "102.7 Mo");

        translator.setLanguage("de");
        assert.equal(size.execute(1), "1 B");
        assert.equal(size.execute(10), "10 B");
        assert.equal(size.execute(100), "100 B");
        assert.equal(size.execute(1000), "1 KB");
        assert.equal(size.execute(10000), "10 KB");
        assert.equal(size.execute(100000), "100 KB");
        assert.equal(size.execute(1000000), "1 MB");
        assert.equal(size.execute(10000000), "10 MB");
        assert.equal(size.execute(100000000), "100 MB");
        assert.equal(size.execute(1000000000), "1 GB");
        assert.equal(size.execute(10000000000), "10 GB");
        assert.equal(size.execute(100000000000), "100 GB");
        assert.equal(size.execute(1000000000000), "1 TB");
        assert.equal(size.execute(10000000000000), "10 TB");
        assert.equal(size.execute(100000000000000), "100 TB");
        assert.equal(size.execute(1000000000000000), "1 PB");
        assert.equal(size.execute(10000000000000000), "10 PB");
        assert.equal(size.execute(100000000000000000), "100 PB");
        assert.equal(size.execute(102754321), "102.7 MB");
    });

    it('Size execute(): failure', function () {
        const size = new Size(translator);
        const testFunc1 = function () {
            size.execute("string");
        };
        expect(testFunc1).to.throw(BadParameterError);

    });
});