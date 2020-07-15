/** The function sums up the intermidiates of numbers
 * @param {number} startN is a given number
 * @param {number} endN is a given number
 * @param {number} sum returned sum
 *
 * @example
 *
 * const sumUp = sumAll(1,2);
 * console.log(sumUp); // 3
 *
 */
const sumAll = (startN, endN) => {
  if (
    startN <= 0 ||
    end <= 0 ||
    typeof endN !== "number" ||
    typeof startN !== "number"
  ) {
    return "ERROR";
  }
  if (a < b) {
    firstN = a;
    secondN = b;
  } else {
    firstN = b;
    secondN = a;
  }
  let sum = 0;
  for (let i = firstN; i <= secondN; i++) {
    sum += 1;
  }
  return sum;
};

module.exports = sumAll;
