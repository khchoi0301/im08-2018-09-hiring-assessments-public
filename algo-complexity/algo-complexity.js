/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/
var TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};
exports.TimeComplexity = TimeComplexity;

// Problem 1: Sum the squares of the values in a given array.

/*
 * Complexity: TimeComplexity.LINEAR , array의 모든 elements를 순회하며 더하여 연산 하므로 linear
 */

exports.sumSquaresTimeComplexity = TimeComplexity.LINEAR; // TODO: Update this constant

var sumSquares = function (array) {
  return array.reduce(function (memo, val) {
    return memo + (Math.pow(val, 2));
  });
};


// Problem 2: Calculate the n-th power of given number.

/*
 * Complexity:TimeComplexity.LOGARITHMIC , 
 짝수일 경우 곱셈 한번당 지수(exponent)가 절반으로 감소, 
 숫자가 아주 크다고 가정할 경우 Logarithmic 
 예)2^16 => 4^8 => 16^4 => 16*16^2 => 16*16*16*16
 */
/*START SOLUTION*///O(lg(exponent))/*END SOLUTION*/
exports.nthPowerTimeComplexity = TimeComplexity.LOGARITHMIC; // TODO: Update this constant

var nthPower = function (base, exponent) {
  // Base case:
  if (exponent === 0) {
    return 1;
    // If exponent is odd
  } else if (exponent % 2 !== 0) {
    return base * nthPower(base, exponent - 1);
    // If exponent is even
  } else {
    return nthPower(base * base, exponent / 2);
  }
};


// Problem 3: Generate every sequence of throws for an n-round rock-paper-scissors game.

/*
 * Complexity:TimeComplexity.EXPONENTIAL
 모든 경우를 구하는 연산으로 m*n 횟수의 연산을 함
 */
/*START SOLUTION*///O(3^n)/*END SOLUTION*/
exports.rockPaperScissorsTimeComplexity = TimeComplexity.EXPONENTIAL; // TODO: Update this constant

var rockPaperScissors = function (rounds) {
  var sequences = [];
  var plays = ['rock', 'paper', 'scissors'];

  var generate = function (sequence, round) {
    // Base case:
    if (round === rounds) {
      sequences.push(sequence);
    } else {
      plays.forEach(function (play) {
        generate(sequence.concat(play), round + 1);
      });
    }
  };

  generate([], 0);
  return sequences;
};
