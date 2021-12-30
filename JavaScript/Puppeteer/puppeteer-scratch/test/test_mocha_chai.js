var expect = require('chai').expect,
    assert = require('chai').assert,
    should = require('chai').should(),  // Actually call the function
    foo = 'bar',
    beverages = { tea: ['chai', 'matcha', 'oolong'] };

describe('Mocha with Chai', function() {

    describe('Assertion styles', function() {

        it('Chai.assert', function() {
            assert.typeOf(foo, 'string'); // without optional message
            assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
            assert.equal(foo, 'bar', 'foo equal `bar`');
            assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
            assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
        });

        /**
         * The expect interface provides a function as a starting point for chaining your language assertions. It works
         * on node.js and in all browsers.
         *
         * The should interface extends Object.prototype to provide a single getter as the starting point for your
         * language assertions. It works on node.js and in all modern browsers except Internet Explorer.
         */
        it('Chai.expect', function() {
            expect(foo).to.be.a('string');
            expect(foo).to.equal('bar');
            expect(foo).to.have.lengthOf(3);
            expect(beverages).to.have.property('tea').with.lengthOf(3);
        });

        it('Chai.should', function() {
            foo.should.be.a('string');
            foo.should.equal('bar');
            foo.should.have.lengthOf(3);
            beverages.should.have.property('tea').with.lengthOf(3);
        });

    });
});
