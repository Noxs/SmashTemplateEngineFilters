const BadParameterError = require("../badParameterError.js");

class ToUpperCase {
    constructor() {

    }

    _replaceAt(string, index, replacement) {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    }

    getName() {
        return "toUpperCase";
    }

    execute(word, parameters, context) {
        if (typeof word !== 'string') {
            throw new BadParameterError('ToUpperCase: first parameter must be a string', word);
        }

        if (parameters && (typeof parameters !== 'object' || (typeof parameters.position !== 'number'))) {
            throw new BadParameterError('ToUpperCase: second parameter must be an object', parameters);
        }

        let position = null;
        if (parameters && typeof parameters.position === "number") {
            position = parameters.position;
        }
        if (position !== null) {
            return this._replaceAt(word, position, word.charAt(position).toUpperCase());
        } else {
            return word.toUpperCase();
        }
    }
}


module.exports = ToUpperCase;