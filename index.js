const DateFilter = require('./lib/date/date.js');
const SizeFilter = require('./lib/size/size.js');
const TranslateFilter = require('./lib/translator/translator.js');
const UcFirstFilter = require('./lib/ucFirst/ucFirst.js');
const PluralFilter = require('./lib/plural/plural.js');


module.exports = {
    Date: DateFilter,
    Size: SizeFilter,
    Translate: TranslateFilter,
    UcFirst: UcFirstFilter,
    Plural: PluralFilter
};