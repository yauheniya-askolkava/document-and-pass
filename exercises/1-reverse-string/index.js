/** The function reverses the string, could use a range of methods piled up:
 * function reverseString(str) {
    return str.split("").reverse().join("");
}
 @param {string} a given string to reverse
@param {string} a string result of a reversed string
 @example

 const reverseMe = reverseString('my');
 console.log(reverseMe); // "ym"
 */
const reverseString = (string) => {
  var spiltIt = string.split("");
  var reverseIt = spiltIt.reverse();
  var joinIt = reverseIt.join("");
  return joinIt;
};

module.exports = reverseString;
