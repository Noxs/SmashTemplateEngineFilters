const BadParameterError = require("../badParameterError.js");

class Join {
    constructor() {

    }

    getName() {
        return "join";
    }

    execute(array, parameters, context) {
        if (typeof array !== 'object' && typeof array !== 'string') {
            throw new BadParameterError('Join: first parameter must be an array or a string', array);
        }

        if (parameters && (typeof parameters !== 'object' || (typeof parameters.delimiter !== 'string'))) {
            throw new BadParameterError('Join: second parameter must be an object', parameters);
        }

        if (typeof array === 'string') {
            return array;
        } else {
            return array.join(parameters.delimiter);
        }
    }
}


module.exports = Join;