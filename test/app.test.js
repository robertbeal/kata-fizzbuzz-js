const expect = require('chai').expect;
const uuid = require('uuid/v4');

let FizzBuzz = require('../app.js');

describe('FizzBuzz', function() {
  it('says the word if the rule applies', function() {
    let rules = [{
      applies: () => { return true; },
      word: uuid().toString() 
    }];

    let fizzbuzz = new FizzBuzz(rules);
    expect(fizzbuzz.say(0)).to.equal(rules[0].word);
  });

  it('says the number if no rules apply', function() {
    let rules = [{
      applies: () => { return false; }
    }];

    let fizzbuzz = new FizzBuzz(rules);
    expect(fizzbuzz.say(0)).to.equal(0);
  });

  it('applies multiple rules', function() {
    let rules = [
      {
        applies: () => { return true; },
        word: uuid().toString()
      },
      {
        applies: () => { return true; },
        word: uuid().toString()
      }
    ];

    let fizzbuzz = new FizzBuzz(rules);
    expect(fizzbuzz.say(0)).to.equal(rules[0].word.concat(rules[1].word));
  });  
});
