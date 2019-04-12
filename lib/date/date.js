const moment = require('moment');
const Translator = require("../translator/translator.js");
const BadParameterError = require("../badParameterError.js");

class Date {
    constructor(translator) {
        if (translator.constructor !== Translator) {
            throw new BadParameterError("First parameter of Date() must be a Translator object", translator);
        }
        this._translator = translator;
    }

    getName() {
        return "date";
    }

    execute(date, parameters, context) {

        if (parameters && typeof parameters !== 'object') {
            throw new BadParameterError('Date: second parameter must be an object', parameters);
        }

        let format;
        if (parameters && parameters.format) {
            if (typeof parameters.format !== "string") {
                throw new BadParameterError('Date: property format must be a string', parameters);
            }
            format = parameters.format;
        } else {
            if (this._translator.getLanguage() === "en") {
                format = "MMMM DD, YYYY";
            } else {
                format = "DD MMMM YYYY";
            }
        }

        moment.locale(this._translator.getLanguage());
        if (typeof date === 'number') {
            return moment(date * 1000).format(format);
        } else if (typeof date === 'string') {
            const momentDate = moment(date);
            if (momentDate.isValid() === true) {
                return momentDate.format(format);
            } else {
                throw new BadParameterError('Date: first parameter must be a string recognized in RFC2822 or ISO format', date);
            }
        } else {
            throw new BadParameterError('Date: first parameter must be a integer (UNIX timestamp) or a string recognized in RFC2822 or ISO format', date);
        }

    }
}


module.exports = Date;

