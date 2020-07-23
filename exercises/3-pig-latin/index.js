/**
 *
 */

const translate = (str) => {
  var vow = ["a", "e", "i", "o", "u"];
  if (vow.indexOf(str.charAt(0)) !== -1) {
    str += "w";
  }
  while (vow.indexOf(str.charAt(0)) == -1) {
    str = str.substr(1) + str.charAt(0);
  }
  return (str += "ay");
};
module.exports = translate;
