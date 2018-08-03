const BadParameterError = require("../badParameterError.js");

class Plural {
    constructor() {

    }

    getName() {
        return "plural";
    }

    _isVowel(char) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y") {
            return true;
        } else {
            return false;
        }
    }

    execute(word, parameters, context) {
        if (typeof word !== 'string') {
            throw new BadParameterError('Plural: first parameter must be a string', word);
        }
        if (word.endsWith("s") === true || word.endsWith("x") === true || word.endsWith("ch") === true || word.endsWith("sh") === true || word.endsWith("o") === true) {
            return word + "es";
        } else if (word.endsWith("z") === true) {
            return word + "es";
        } else if (this._isVowel(word[word.length - 2]) === true && word[word.length - 1] === "y") {
            return word + "s";
        } else if (this._isVowel(word[word.length - 2]) === false && word[word.length - 1] === "y") {
            return word.substring(0, word.length - 1) + "ies";
        } else if ((word.endsWith("f") === true || word.endsWith("fe") === true) && (word.endsWith("ff") === false && word.endsWith("ffe") === false)) {
            if (word.endsWith("f") === true) {
                return word.substring(0, word.length - 1) + "ves";
            } else {
                return word.substring(0, word.length - 2) + "ves";
            }
        } else {
            return word + "s";
        }
    }
}


module.exports = Plural;