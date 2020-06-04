const BadParameterError = require("../badParameterError.js");

class Slice {

	getName() {
		return "slice";
	}

	execute(item, parameters = {}, context) {
		if (!item.slice) {
			throw new BadParameterError('Slice: first parameter ahs no method slice', item);
		}
		return item.slice(parameters.start, parameters.end);
	}
}

module.exports = Slice;
