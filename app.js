
class FizzBuzz {
    constructor(rules) {
        this.rules = rules;
    }

    say(number) {
        let output = this.rules.filter(rule => rule.applies(number))
                  .map(rule => rule.word)
                  .join('');
        
        return output ? output : number; 
    }
}

module.exports = FizzBuzz;