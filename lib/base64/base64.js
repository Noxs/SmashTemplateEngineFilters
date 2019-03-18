const BadParameterError = require("../badParameterError.js");

class Base64 {

	getName() {
		return "base64";
	}

	execute(word, parameters, context) {
		if (typeof word !== 'string') {
			throw new BadParameterError('Base64: first parameter must be a string', word);
		}
		return Buffer.from(word).toString('base64');
	}
}

module.exports = Base64;
