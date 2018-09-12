# SmashTemplateEngineFilters [![Build Status](https://travis-ci.org/Noxs/SmashTemplateEngineFilters.svg?branch=master)](https://travis-ci.org/Noxs/SmashTemplateEngineFilters) [![codecov](https://codecov.io/gh/Noxs/SmashTemplateEngineFilters/branch/master/graph/badge.svg)](https://codecov.io/gh/Noxs/SmashTemplateEngineFilters)

Some Filters designed to be used in [SmashTemplateEngine](https://www.npmjs.com/package/smash-template-engine).

It includes :  <br />
&ensp;&ensp;- Translate<br />
&ensp;&ensp;- Date<br />
&ensp;&ensp;- Size<br />
&ensp;&ensp;- Plural<br />
&ensp;&ensp;- UcFirst<br />

## Getting Started

### Installing

All you need is to install the npm package.

```
npm install smash-template-engine-filters
```

You can now require the package and create an instance of it :

```
const Filters = require('smash-template-engine-filters');
const filters = new Filters();
```

## Usage

Each filters has 2 required methods :<br />
&ensp;&ensp;- getName()<br />
&ensp;&ensp;- execute()<br />

### Translate Filter

From a keyword it will return a translation in the wished language.

```
const translations = {
    'HELLO_KEYWORD': {
        en: "Hello World !",
        de: "Hallo !",
        fr: "Bonjour !"
    }
};

const translator = new filters.Translate(translations);
translator.execute("HELLO_KEYWORD"); // Hello World !

translator.setLanguage("fr"); // set the language
translator.setFallbackLanguage("en"); // Fallback language is en by default
translator.execute("HELLO_KEYWORD"); // Bonjour !
```

You can also add variable into translations, it is made so :

```
const translations = {
    'HELLO_NAME_KEYWORD': {
        en: "Hello %name% !",
        de: "Hallo %name% !",
        fr: "Bonjour %name% !"
    }
};

const translator = new filters.Translate(translations);

translator.execute("HELLO_NAME_KEYWORD", { name: "James" }); // Hello James !
```

### Date Filter

It will convert a UNIX timestamp into a string formatted as you wish and translated into the language you want.

A date format can be specified has second parameter. If not defined, the format will be defined thanks to the language set in the translator. It means that the Translate filter has to be instanced.

```
const translator = new filters.Translate(translations);

const date = new filters.date(translator);
const timestamp = 1517407220;
date.execute(timestamp) // January 31, 2018
```

But you can set the format you want as parameter :

```
const timestamp = 1517407220;
date.execute(timestamp, {format : "MM-DD-YYYY"}) // 31-01-2018
```

This filter is based on [MomentJS](https://momentjs.com/), check it out for specific format.

### Size Filter

It convert a Bytes number into a appropriated unit :

```
const size = new filters.size(translator);

size.execute(1)                      // "1 B"
size.execute(10)                     // "10 B"
size.execute(100)                    // "100 B"
size.execute(1000)                   // "1 KB"
size.execute(10000)                  // "10 KB"
size.execute(100000)                 // "100 KB"
size.execute(1000000)                // "1 MB"
size.execute(10000000)               // "10 MB"
size.execute(100000000)              // "100 MB"
size.execute(1000000000)             // "1 GB"
size.execute(10000000000)            // "10 GB"
size.execute(100000000000)           // "100 GB"
size.execute(1000000000000)          // "1 TB"
size.execute(10000000000000)         // "10 TB"
size.execute(100000000000000)        // "100 TB"
size.execute(1000000000000000)       // "1 PB"
size.execute(10000000000000000)      // "10 PB"
size.execute(100000000000000000)     // "100 PB"
```

### ucFirst Filter

It transforms the first character of a string to uppercase.

If an object with property "word" is set  as second parameter, it will return this string with its first character turned into uppercase.

```
const ucFirst = new filters.ucFirst();

ucFirst.execute("lowercase"); // "Lowercase"
ucFirst.execute("lowercase", {word:"parameter"}); // Parameter
```

### plural Filter

It can turn almost (not ) every english words to its plural.

```
const plural = new filters.plural();
plural.execute("arch"); // "arches"
plural.execute("buzz"); // "buzzes"
plural.execute("alley"); // "alleys"
plural.execute("ally"); // "allies"
plural.execute("calf"); // "calves"
plural.execute("knife"); // "knives"
plural.execute("buffalo"); // "buffaloes"
plural.execute("bluff"); // "bluffs"
plural.execute("index"); // "indexes"
```
