const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Translator = require('../../lib/translator/translator.js');
const BadParameterError = require('../../lib/badParameterError.js');
const FilterExecutionError = require('../../lib/filterExecutionError.js');

const translations = {
    'HELLO_WORD': {
        en: 'Hello',
        fr: 'Bonjour',
        de: 'Hallo'
    },
    'HOW_ARE_YOU_QUESTION': {
        en: 'How are you?',
        fr: 'Comment ça va?',
        de: "Wie geht's?"
    },
    'TEST': {

    },
    'TEST_REPLACE': {
        fr: "test %test%",
        en: "test %test%"
    },
    'TEST_REPLACE_1': {
        fr: "test %test% %test% %test%"
    },
    'TEST_REPLACE_2': {
        fr: "%lol% %test% OK %lol% %test%"
    }
};

describe('Translator', function () {

    it('Translator constructor: success', function () {
        const testFunc = function () {
            const translator = new Translator(translations);
        };
        expect(testFunc).to.not.throw();
    });

    it('Translator constructor: failure', function () {
        const testFunc = function () {
            const translator = new Translator("");
        };
        expect(testFunc).to.throw(BadParameterError);
    });

    it('Translator getName()', function () {
        const translator = new Translator(translations);
        assert.equal(translator.getName(), "translate");

    });

    it('Translator getLanguage()/setLanguage()', function () {
        const translator = new Translator(translations);
        assert.equal(translator.getLanguage(), null);
        translator.setLanguage("en");
        assert.equal(translator.getLanguage(), "en");
        translator.setLanguage("fr");
        assert.equal(translator.getLanguage(), "fr");

        const testFunc = function () {
            translator.setLanguage(123);
        };
        expect(testFunc).to.throw(BadParameterError);
    });

    it('Translator getFallbackLanguage()/setFallbackLanguage()', function () {
        const translator = new Translator(translations);
        assert.equal(translator.getFallbackLanguage(), "en");
        translator.setFallbackLanguage("fr");
        assert.equal(translator.getFallbackLanguage(), "fr");
        translator.setFallbackLanguage("en");
        assert.equal(translator.getFallbackLanguage(), "en");

        const testFunc = function () {
            translator.setFallbackLanguage(123);
        };
        expect(testFunc).to.throw(BadParameterError);
    });

    it('Size execute(): success', function () {
        const translator = new Translator(translations);
        assert.equal(translator.execute("HELLO_WORD"), "Hello");

        translator.setLanguage("en");
        assert.equal(translator.execute("HELLO_WORD"), "Hello");

        translator.setLanguage("fr");
        assert.equal(translator.execute("HELLO_WORD"), "Bonjour");

        assert.equal(translator.execute("TEST_REPLACE_1", { test: "lol" }), "test lol lol lol");

        assert.equal(translator.execute("TEST_REPLACE_2", { test: "lol", lol: "test" }), "test lol OK test lol");

    });

    it('Size execute(): failure', function () {
        const translator = new Translator(translations);
        const testFunc1 = function () {
            translator.execute(123456);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            translator.execute("TEST_REPLACE", 123456);
        };
        expect(testFunc2).to.throw(BadParameterError);

        const testFunc3 = function () {
            translator.execute("TEST_REPLACE", {});
        };
        expect(testFunc3).to.throw(FilterExecutionError);
    });

    it('Size translate(): success', function () {
        const translator = new Translator(translations);
        assert.equal(translator.execute("HELLO_WORD"), "Hello");

        translator.setLanguage("en");
        assert.equal(translator.execute("HELLO_WORD"), "Hello");

        translator.setLanguage("fr");
        assert.equal(translator.execute("HELLO_WORD"), "Bonjour");

        translator.setLanguage("es");
        assert.equal(translator.execute("HELLO_WORD"), "Hello");
    });

    it('Size translate(): failure', function () {
        const translator = new Translator(translations);
        const testFunc1 = function () {
            translator.translate(123456);
        };
        expect(testFunc1).to.throw(BadParameterError);

        const testFunc2 = function () {
            translator.translate("string");
        };
        expect(testFunc2).to.throw(FilterExecutionError);

        const testFunc3 = function () {
            translator.translate("TEST");
        };
        expect(testFunc3).to.throw(FilterExecutionError);
    });
});