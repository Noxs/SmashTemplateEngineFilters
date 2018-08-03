const BadParameterError = require("../badParameterError.js");

class ucFirst {
    constructor() {
       
    }

    getName() {
        return "ucfirst";
    }

    execute(word, parameters, context) {
        if (typeof word !== 'string') {
            throw new BadParameterError('ucFirst: first parameter must be a string', word);
        }
        
        if (parameters && (typeof parameters !== 'object' || (typeof parameters.word !== 'string'))) {
            throw new BadParameterError('ucFirst: second parameter must be an object', parameters);
        }

        if (parameters && parameters.word) {
            return parameters.word.charAt(0).toUpperCase() + parameters.word.substring(1);
        } else {
            return word.charAt(0).toUpperCase() + word.substring(1);
        }
    }
}


module.exports = ucFirst;