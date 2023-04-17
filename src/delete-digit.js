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
  const digits = Array.from(String(n), Number);
  let max = -Infinity;

  for (let i = 0; i < digits.length; i++) {
    const newNum = Number(digits.filter((_, j) => j !== i).join(''));
    max = Math.max(max, newNum);
  }

  return max;
}


module.exports = {
  deleteDigit
};
