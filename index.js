const Date = require('./lib/date/date.js');
const Size = require('./lib/size/size.js');
const Slice = require('./lib/slice/slice.js');
const Translator = require('./lib/translator/translator.js');
const ToUpperCase = require('./lib/toUpperCase/toUpperCase.js');
const ToLowerCase = require('./lib/toLowerCase/toLowerCase.js');
const Plural = require('./lib/plural/plural.js');
const Join = require('./lib/join/join.js');
const ForbiddenJsKeyword = require('./lib/forbiddenJsKeyword/forbiddenJsKeyword.js');
const Base64 = require('./lib/base64/base64.js');
const Nl2br = require('./lib/nl2br/nl2br.js');


module.exports = {
    Date,
    Size,
    Translate: Translator,
    Translator,
    ToUpperCase,
    ToLowerCase,
    Plural,
    Join,
    ForbiddenJsKeyword,
    Base64,
    Nl2br,
    Slice,
};
