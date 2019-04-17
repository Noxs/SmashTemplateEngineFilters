const BadParameterError = require("../badParameterError.js");
const FilterExecutionError = require("../filterExecutionError.js");

const defaultFallback = "en";
const spacer = [" ", "\n", "\t"];
const percent = "%";
const dash = "-";

class Translator {
    constructor(translations) {
        if (typeof (translations) !== 'object') {
            throw new BadParameterError('First Parameter of Translator() must be an object', translations);
        }
        this._translations = translations;
        this._language = null;
        this._fallbackLanguage = defaultFallback;
    }

    get translations() {
        return this._translations;
    }

    setLanguage(language) {
        if (typeof (language) !== 'string') {
            throw new BadParameterError('First parameter of setLanguage() must be a string', language);
        }
        if (language.indexOf(dash) !== -1) {
            language = language.split(dash)[0];
        }
        this._language = language;
        return this;
    }

    getLanguage() {
        return this._language;
    }

    setFallbackLanguage(language) {
        if (typeof (language) !== 'string') {
            throw new BadParameterError('First parameter of setFallbackLanguage() must be a string', language);
        }
        if (language.indexOf(dash) !== -1) {
            language = language.split(dash)[0];
        }
        this._fallbackLanguage = language;
        return this;
    }

    getFallbackLanguage() {
        return this._fallbackLanguage;
    }

    translate(keyword) {
        if (typeof (keyword) !== 'string') {
            throw new BadParameterError('First parameter of translate() must be a string', keyword);
        }
        if (typeof this.translations[keyword] === "undefined") {
            throw new FilterExecutionError("Keyword " + keyword + " not found in translations");
        }
        if (typeof (this.translations[keyword][this.getLanguage()]) === "undefined" && typeof (this.translations[keyword][this.getFallbackLanguage()]) === "undefined") {
            throw new FilterExecutionError('There is no translation for the keyword ' + keyword + ' in ' + this.getLanguage() + ' nor in ' + this.getFallbackLanguage());
        }
        if (typeof (this.translations[keyword][this.getLanguage()]) === "undefined" && typeof (this.translations[keyword][this.getFallbackLanguage()]) !== "undefined") {
            return this.translations[keyword][this.getFallbackLanguage()];
        }
        return this.translations[keyword][this.getLanguage()];
    }

    getName() {
        return "translate";
    }

    execute(keyword, parameters, context) {
        if (typeof keyword !== 'string') {
            throw new BadParameterError('Translate: first parameter must be a string', keyword);
        }
        let renderer = this.translate(keyword);

        let percentStart = false;
        let percentStartIndex = 0;
        const keys = [];
        for (let i = 0, length = renderer.length; i < length; i++) {
            if (renderer[i] === percent) {
                if (percentStart === false) {
                    percentStart = true;
                    percentStartIndex = i;
                } else {
                    keys.push(renderer.substring(percentStartIndex + 1, i));
                    percentStart = false;
                    percentStartIndex = 0;
                }
            } else if (spacer.indexOf(renderer[i]) !== -1) {
                percentStart = false;
                percentStartIndex = 0;
            }
        }
        if (keys.length !== 0) {
            if (typeof parameters !== 'object') {
                throw new BadParameterError('Translate: second parameter must be an object', parameters);
            }
            for (let i = 0, length = keys.length; i < length; i++) {
                const key = keys[i];
                if (typeof parameters[key] === "undefined") {
                    throw new FilterExecutionError("Translate: " + key + " is not defined");
                }
                renderer = renderer.replace('%' + key + '%', parameters[key]);
            }
        }
        return renderer;
    }
}

module.exports = Translator;
