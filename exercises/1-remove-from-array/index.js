/**
 * The function removes from the given array
 * @param {array} arrOriginal is a given array
 * @param {array} elementToRemove the argumentS to be removed
 * The return gives an original array with removed elements
 * method is used "filter"
 * @example
 * const arrOriginal = removeFromArray([1, 2, 3, 4], 7, 2));
 * console.log(arrOriginal); // [1, 3, 4]
 */
const removeFromArray = (arrOriginal, ...elementToRemove) => {
  return arrOriginal.filter((elem) => elementToRemove.indexOf(elem) === -1);
};

module.exports = removeFromArray;
