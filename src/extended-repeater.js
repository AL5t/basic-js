const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addRepeat;
  let newStr;

  if (options.additionRepeatTimes > 1) {
    addRepeat = (options.addition + (options.additionSeparator || '|')).repeat(options.additionRepeatTimes - 1 || 1) + options.addition;
  } else if (options.addition) {
    addRepeat = options.addition;
  } else {
    addRepeat = '';
  }

  if (options.repeatTimes > 1) {
    newStr = (str + addRepeat + (options.separator || '+')).repeat(options.repeatTimes - 1 || 1) + str + addRepeat;
  } else {
    newStr = (str + addRepeat).repeat(options.repeatTimes || 1);
  }

  return newStr;
}

module.exports = {
  repeater
};
