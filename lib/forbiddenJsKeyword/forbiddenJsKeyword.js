const BadParameterError = require("../badParameterError.js");

const FORBIDDEN_JS_KEYWORDS = [
    "abstract",
    "else",
    "instanceof",
    "super",
    "boolean",
    "enum",
    "int",
    "switch",
    "break",
    "export",
    "interface",
    "synchronized",
    "byte",
    "extends",
    "let",
    "this",
    "case",
    "false",
    "long",
    "throw",
    "catch",
    "final",
    "native",
    "throws",
    "char",
    "finally",
    "new",
    "transient",
    "class",
    "float",
    "null",
    "true",
    "const",
    "for",
    "package",
    "try",
    "continue",
    "function",
    "private",
    "typeof",
    "debugger",
    "goto",
    "protected",
    "var",
    "default",
    "if",
    "public",
    "void",
    "delete",
    "implements",
    "return",
    "volatile",
    "do",
    "import",
    "short",
    "while",
    "double",
    "in",
    "static",
    "with",
];

const DEFAULT_SUFFIX = "Object";

class ForbiddenJsKeyword {
    constructor(suffix = DEFAULT_SUFFIX) {
        this._suffix = suffix;
    }

    getName() {
        return "forbiddenJsKeyword";
    }

    _forbiddenJsKeywords() {
        return FORBIDDEN_JS_KEYWORDS;
    }

    execute(word, parameters, context) {
        if (typeof word !== 'string') {
            throw new BadParameterError('ForbiddenJsKeyword: first parameter must be a string', word);
        }
        for (let i = 0, length = this._forbiddenJsKeywords().length; i < length; i++) {
            if (word === this._forbiddenJsKeywords()[i]) {
                word += this._suffix;
                break;
            }
        }
        return word;
    }
}


module.exports = ForbiddenJsKeyword;