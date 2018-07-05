const BadParameterError = require("../badParameterError.js");
const FilterExecutionError = require("../filterExecutionError.js");

const defaultFallback = "en";

class Translator {
    constructor(translations) {
        if (typeof (translations) !== 'object') {
            throw new BadParameterError('First Parameter of Translator() must be an object', translations);
        }
        this._translations = translations;
        this._fallbackLanguage = defaultFallback;
    }

    get translations() {
        return this._translations;
    }

    setLanguage(language) {
        if (typeof (language) !== 'string') {
            throw new BadParameterError('First parameter of setLanguage() must be a string', language);
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
        if (parameters) {
            if (typeof parameters !== 'object') {
                throw new BadParameterError('Translate: second parameter must be an object', parameter);
            }
            let renderer = this.translate(keyword);
            for (let key in parameters) {

                if (typeof parameters[key] === "undefined") {
                    throw new FilterExecutionError(key + " is not defined");
                }
                renderer = renderer.replace('%' + key + '%', parameters[key]);
            }
            return renderer;
        } else {
            return this.translate(keyword);
        }
    }
}

module.exports = Translator;