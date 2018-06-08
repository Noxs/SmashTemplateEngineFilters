const moment = require('moment');
const Translator = require("../translator/translator.js");
//add translator
//add BadParameterError
//add FilterError

class Date {
    constructor(translator) {
        if (translator.constructor !== Translator) {
            throw new Error();//TODO
        }
        this._translator = translator;
    }

    getName() {
        return "date";
    }

    execute(timestamp, parameters, context) {
        //TODO



        if (typeof timestamp !== 'number') {
            const error = new Error('Date must be a number (UNIX timestamp), ' + typeof timestamp + " given");//TODO
            error.steUsageFailure = true;
            throw error;
        }

        if (parameters && typeof parameters !== 'object') {
            throw new Error('Second parameter of date filter must be an object, ' + typeof parameters + " given");//TODO
        }



        let format;
        if (parameters && parameters.format) {// REWORK  string given instead of object
            if (typeof parameters.format !== "string") {
                const error = new Error('Date format must be a string, ' + typeof parameters.format + " given");//TODO
                error.steUsageFailure = true;
                throw error;
            }
            format = parameters.format;// change is parameters is null
        } else {
            if (this._translator.language === "en") {
                format = "MMMM DD, YYYY";
            } else {
                format = "DD MMMM YYYY";
            }
        }




        moment.locale(this._translator.language);
        return moment(timestamp * 1000).format(format);
    }
}


module.exports = Date;

