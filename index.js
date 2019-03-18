const Date = require('./lib/date/date.js');
const Size = require('./lib/size/size.js');
const Translator = require('./lib/translator/translator.js');
const ToUpperCase = require('./lib/toUpperCase/toUpperCase.js');
const ToLowerCase = require('./lib/toLowerCase/toLowerCase.js');
const Plural = require('./lib/plural/plural.js');
const Join = require('./lib/join/join.js');
const ForbiddenJsKeyword = require('./lib/forbiddenJsKeyword/forbiddenJsKeyword.js');
const Base64 = require('./lib/base64/base64.js');


module.exports = {
    Date: Date,
    Size: Size,
    Translate: Translator,
    Translator: Translator,
    ToUpperCase: ToUpperCase,
    ToLowerCase: ToLowerCase,
    Plural: Plural,
    Join: Join,
    ForbiddenJsKeyword: ForbiddenJsKeyword,
    Base64: Base64,
};
