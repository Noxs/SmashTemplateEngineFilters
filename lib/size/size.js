const Translator = require("../translator/translator.js");
const BadParameterError = require("../badParameterError.js");
//Add translator
//Add filter Error

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
    constructor() {
    
    }

    getName() {
        return "size";
    }

    execute(number, parameters, context) {
        //TODO "12345AE3"
        if (!isNaN(parseFloat(number)) && isFinite(number)) {
            throw new BadParameterError("Argument passed to size filter must be numeric", number);
        }

        if(typeof number === "string") {
            number = parseInt(number);
        }

        // if (!Number.isInteger(number)) {
        //     number = parseInt(number);
        // }
        // if (isNaN(number)) {
        //     const error = new Error("Failed to parse, " + number + " (type : " + typeof number + ") into number");//TODO
        //     error.steUsageFailure = true;
        //     throw error;
        // }
        let formattedNumber = number;
        let index = 0;
        while (formattedNumber >= 1000 && index < 15) {
            formattedNumber = Math.trunc(formattedNumber / 100) / 10;
            index += 3;
        }

        formattedNumber = formattedNumber.toString();
        let unit = units[index];

        const translator = new Translator();

        try {
            unit = translator.translate(unit);
        } catch (error) {
            console.info("Translations for unit " + unit + " are missing");//TODO
        }

        return formattedNumber + spacer + unit;
    }
}

module.exports = Size;