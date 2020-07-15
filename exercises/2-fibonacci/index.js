/** The function explores the fibonacci numbers by giving an output based on the position
 * @param {number} ind is an index as position in a list of fibonacci
 * @param {number} arr is a number based on the index given position
 *
 * @example
 *
 * const fiBO = fibonacci(2);
 * console.log(fibonacci) // 2
 */
const fibonacci = (ind) => {
  if (ind < 0) {
    return "OOPS";
  }
  let arr = [0, 1];
  for (let i = 2; i <= ind; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[ind];
};

module.exports = fibonacci;
