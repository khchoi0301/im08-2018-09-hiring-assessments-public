/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function (array) {
  var numArr = []
  var numStr = ''

  function recur(input) {
    for (let i = 0; i < input.length; i++) {
      if (typeof (input[i]) === 'number') {
        numStr += input[i]
        numArr.push(input[i])
      }
      if (typeof (input[i]) === 'object') {
        recur(input[i])
      }
    }
  }

  recur(array)
  console.log(numStr)
  return numArr

};

module.exports = printArray;