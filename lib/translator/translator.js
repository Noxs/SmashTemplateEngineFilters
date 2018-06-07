//Add BadParameterError
//Add FilterExecutionError

class Translator {
    constructor() {

    }

    getName() {
        return "translate";
    }

    execute(keyword, parameters, context) {
        if (typeof keyword !== 'string') {
            const error = new Error('Keyword ' + keyword + ' must be a string, ' + typeof keyword + " given");// TODO
            error.steUsageFailure = true;
            throw error;
        }
        if (parameters) {
            if (typeof parameters !== 'object') {
                throw new Error('Second parameter of translate filter must be an object, ' + typeof parameters + " given");// TODO
            }
            let renderer = this.translate(keyword);// replace
            for (let key in parameters) {
                if (typeof parameters[key] === "undefined") {
                    const error = new Error(key + " is not defined"); // TODO
                    error.steMissingParameter = true;
                    throw error;
                }
                try {
                    renderer = renderer.replace('%' + key + '%', parameters[key]);// TODO
                } catch (error) {
                    error.steUsageFailure = true;
                    throw error;// TODO
                }
            }
            return renderer;
        } else {
            return this.translate(keyword);
        }
    }













    translate(keyword) {
        if (typeof (keyword) !== 'string') {
            throw new Error('First parameter of translate() must be a string, ' + typeof keyword + " given");//TODO
        }
        if (typeof this.translations[keyword] === "undefined") {
            const error = new Error("Keyword " + keyword + " not found in translations");//TODO
            error.steUsageFailure = true;
            throw error;
        }
        if (typeof (this.translations[keyword][this.language]) === "undefined" && typeof (this.translations[keyword][this.fallbackLanguage]) === "undefined") {
            const error = new Error('There is no translation for the keyword ' + keyword + ', neither in the language nor in the fallback language');//TODO
            error.steUsageFailure = true;
            throw error;
        }
        if (typeof (this.translations[keyword][this.language]) === "undefined" && typeof (this.translations[keyword][this.fallbackLanguage]) !== "undefined") {
            return this.translations[keyword][this.fallbackLanguage];
        }
        return this.translations[keyword][this.language];
    }

    set translations(translations) {
        if (typeof (translations) !== 'object') {
            const error = new Error('Property translations of translator must be an object, ' + typeof translations + " given");//TODO
            error.steUsageFailure = true;
            throw error;
        }
        this._translations = translations;
    }

    get translations() {
        return this._translations;
    }

    set language(language) {
        //TODO ?  should language be compared to all languages existing in translations (in case of asking a language that doesn't exist)
        if (typeof (language) !== 'string') {
            const error = new Error('Property language of translator must be a string, ' + typeof language + " given");//TODO
            error.steUsageFailure = true;
            throw error;
        }
        this._language = language;
    }

    get language() {
        return this._language;
    }

    set fallbackLanguage(language) {
        if (typeof (language) !== 'string') {
            const error = new Error('Property fallbackLanguage of translator must be a string, ' + typeof language + " given");//TODO
            error.steUsageFailure = true;
            throw error;
        }
        this._fallbackLanguage = language;
    }

    get fallbackLanguage() {
        return this._fallbackLanguage;
    }






}

module.exports = Translator;