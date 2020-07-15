/** The function repeats a given string a given number of times
 * @param {string} str is a given string
 * @param {number} n is a given number of times
 * @param {string} result is a string with a needed repetition
 *
 * @example
 *
 * const cookie = repeatString('cookie', 3);
 * console.log(cookie); // 'cookiecookiecookie'
 *
 */
const repeatString = (str, n) => {
  if (n < 0) return "ERROR";

  let result = "";
  for (let i = 0; i < n; i++) {
    result = result + str;
  }
  return result;
};

module.exports = repeatString;
