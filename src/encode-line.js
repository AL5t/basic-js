const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let word = '';
  if (str) {
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
        result = `${word}${count}${str[i]}`;
      } else if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
        word = `${result}${str[i]}`;
        result = `${word}`;
      } else {
        count = 1;
        word = result;
      }
    }
    return result;
  }
  return str;
}

module.exports = {
  encodeLine
};
