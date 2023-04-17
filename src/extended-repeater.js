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
  if (str === undefined) {
    return '';
  }

  str = String(str);

  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  const separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';

  const additionRepeatString = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const result = Array(repeatTimes).fill(str + additionRepeatString);

  return result.join(separator);
}

module.exports = {
  repeater
};
