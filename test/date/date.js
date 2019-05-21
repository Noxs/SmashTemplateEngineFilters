const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Date = require('../../lib/date/date.js');
const Translator = require('../../lib/translator/translator.js');
const BadParameterError = require('../../lib/badParameterError.js');

const translator = new Translator({
    'HELLO_WORD': {
        en: 'Hello',
        fr: 'Bonjour',
        de: 'Hallo'
    },
    'HOW_ARE_YOU_QUESTION': {
        en: 'How are you?',
        fr: 'Comment ça va?',
        de: "Wie geht's?"
    }
});

describe('Date', function () {
    it('Date constructor: success', function () {
        const testFunc = function () {
            const date = new Date(translator);
        };
        expect(testFunc).to.not.throw();
    });

    it('Date constructor: failure', function () {
        const testFunc = function () {
            const date = new Date("");
        };
        expect(testFunc).to.throw(BadParameterError);
    });

    it('Date getName()', function () {
        const date = new Date(translator);
        assert.equal(date.getName(), "date");

    });

    it('Date execute(): success', function () {
        const date = new Date(translator);

        translator.setLanguage("en");
        assert.equal(date.execute(1516724607), 'January 23, 2018');

        translator.setLanguage("fr");
        assert.equal(date.execute(1516724607, { format: 'dddd DD MMMM YYYY' }), 'mardi 23 janvier 2018');
        assert.equal(date.execute(1516724607), '23 janvier 2018');
        assert.equal(date.execute('2018-01-23T10:33:41.362Z'), '23 janvier 2018');

        translator.setLanguage("de");
        assert.equal(date.execute(1516724607), '23 Januar 2018');
    });

    it('Date execute(): failure', function () {
        const date = new Date(translator);
        const testFunc1 = function () {
            date.execute("string");
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            date.execute(123456789, "string");
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            date.execute(123456789, { format: 123546789 });
        };
        expect(testFunc3).to.throw(BadParameterError);

        const testFunc4 = function () {
            date.execute({});
        };
        expect(testFunc4).to.throw(BadParameterError);
    });
});
