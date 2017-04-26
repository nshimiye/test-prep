var should = require('should');

var q1 = require('../questions/q1.js'); // q1 = question 1
var a1 = require('../answers/a1.js'); // a1 = answer 1

// @TODO fetch user input
var userInput = 3;

describe('Add', function() {
    it('should return value that same as [user input]', function() {
      a1().should.equal(userInput);
    });
});