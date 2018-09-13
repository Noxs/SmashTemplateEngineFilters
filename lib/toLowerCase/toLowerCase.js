const BadParameterError = require("../badParameterError.js");

class ToLowerCase {
    constructor() {

    }

    _replaceAt(string, index, replacement) {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    }

    getName() {
        return "toLowerCase";
    }

    execute(word, parameters, context) {
        if (typeof word !== 'string') {
            throw new BadParameterError('ToLowerCase: first parameter must be a string', word);
        }

        if (parameters && (typeof parameters !== 'object' || (typeof parameters.position !== 'number'))) {
            throw new BadParameterError('ToLowerCase: second parameter must be an object', parameters);
        }

        let position = null;
        if (parameters && typeof parameters.position === "number") {
            position = parameters.position;
        }
        if (position !== null) {
            return this._replaceAt(word, position, word.charAt(position).toLowerCase());
        } else {
            return word.toLowerCase();
        }
    }
}


module.exports = ToLowerCase;