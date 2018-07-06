const Translator = require("../translator/translator.js");
const BadParameterError = require("../badParameterError.js");

const units = {
    0: "B",
    3: "KB",
    6: "MB",
    9: "GB",
    12: "TB",
    15: "PB"
};

const spacer = " ";

class Size {
    constructor(translator) {
        if (translator.constructor !== Translator) {
            throw new BadParameterError("First parameter of Size() must be a Translator object", translator);
        }
        this._translator = translator;
    }

    getName() {
        return "size";
    }

    execute(number, parameters, context) {
        if (typeof number !== "number") {
            throw new BadParameterError("Size: first parameter must be a number", number);
        }

        let formattedNumber = number;
        let index = 0;
        while (formattedNumber >= 1000 && index < 15) {
            formattedNumber = Math.trunc(formattedNumber / 100) / 10;
            index += 3;
        }

        formattedNumber = formattedNumber.toString();
        let unit = units[index];

        unit = this._translator.translate(unit);
        return formattedNumber + spacer + unit;
    }
}

module.exports = Size;