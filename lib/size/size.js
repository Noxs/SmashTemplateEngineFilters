const Translator = require("../translator/translator.js");
//Add translator
//Add filter Error
//Add Bad parameter Error

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
    constrcutor(translator) {
        if (translator.constructor !== Translator){
            throw new Error();//TODO
        }
        this._translator = translator;
    }

    getName() {
        return "size";
    }

    execute(number, parameters, context) {
        //TODO

        if (!Number.isInteger(number)) {
            number = parseInt(number);
        }
        if (isNaN(number)) {
            const error = new Error("Failed to parse, " + number + " (type : " + typeof number + ") into number");//TODO
            error.steUsageFailure = true;
            throw error;
        }
        let formattedNumber = number;
        let index = 0;
        while (formattedNumber >= 1000 && index < 15) {
            formattedNumber = Math.trunc(formattedNumber / 100) / 10;
            index += 3;
        }

        formattedNumber = formattedNumber.toString();
        let unit = units[index];
        try {
            unit = this._translator.translate(unit);
        } catch (error) {
            console.info("Translations for unit " + unit + " are missing");//TODO
        }

        return formattedNumber + spacer + unit;
    }
}

module.exports = Size;