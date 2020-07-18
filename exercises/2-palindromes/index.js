/**The function to be implemented with redex in order to catch comma and space
 * @param {string} str - a word to be checked
 * @param {boolean} true or false return
 * @example
 *
 * const palindR = palindromes(Ada);
 * console.log(palindR); // true
 */
const palindromes = (str) => {
  let escapeCommaSpace = /[\W_]/g;
  const lowerCase = str.toLowerCase().replace(escapeCommaSpace, "");
  const reversedString = lowerCase.split("").reverse().join("");
  return reversedString === lowerCase;
};

module.exports = palindromes;
