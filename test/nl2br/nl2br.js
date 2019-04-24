const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const Nl2br = require('../../lib/nl2br/nl2br.js');
const BadParameterError = require('../../lib/badParameterError.js');

describe('Nl2br', function () {
	it('Nl2br constructor: success', function () {
		const testFunc1 = function () {
			const nl2br = new Nl2br();
		};
		expect(testFunc1).to.not.throw();
	});

	it('Nl2br getName()', function () {
		const nl2br = new Nl2br();
		assert.equal(nl2br.getName(), "nl2br");
	});

	it('Nl2br execute(): success', function () {
		const nl2br = new Nl2br();
		assert.equal(nl2br.execute("a_string\n\nlol  \n"), "a_string</br></br>lol  </br>");
	});

	it('Nl2br execute(): failure', function () {
		const nl2br = new Nl2br();
		const testFunc1 = function () {
			nl2br.execute(2);
		};
		expect(testFunc1).to.throw(BadParameterError);

		const testFunc2 = function () {
			nl2br.execute(1);
		};
		expect(testFunc2).to.throw(BadParameterError);

		const testFunc3 = function () {
			nl2br.execute({});
		};
		expect(testFunc3).to.throw(BadParameterError);

	});
});
