const DateFilter = require('./lib/date/date.js');
const SizeFilter = require('./lib/size/size.js');
const TranslateFilter = require('./lib/translator/translator.js');
const ToUpperCase = require('./lib/toUpperCase/toUpperCase.js');
const ToLowerCase = require('./lib/toLowerCase/toLowerCase.js');
const PluralFilter = require('./lib/plural/plural.js');
const Join = require('./lib/join/join.js');


module.exports = {
    Date: DateFilter,
    Size: SizeFilter,
    Translate: TranslateFilter,
    ToUpperCase: ToUpperCase,
    ToLowerCase: ToLowerCase,
    Plural: PluralFilter,
    Join: Join
};