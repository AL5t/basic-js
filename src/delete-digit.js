const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringN = n.toString();
  let array = [];
  for (let i = 0; i < stringN.length; i++) {
    let str = + (stringN.slice(0, i) + stringN.slice(i + 1));
    array.push(str);
  }
  return Math.max.apply(null, array);
}

module.exports = {
  deleteDigit
};
