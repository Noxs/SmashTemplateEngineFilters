const BadParameterError = require("../badParameterError.js");

class Nl2br {

	getName() {
		return "nl2br";
	}

	execute(word, parameters, context) {
		if (typeof word !== 'string') {
			throw new BadParameterError('Nl2br: first parameter must be a string', word);
		}
		return word.split("\n").join("</br>");
	}
}

module.exports = Nl2br;
