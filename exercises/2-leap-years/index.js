/**The function confirms whether the year is a leap one.
 * @param {number} year - a year to check
 * @return {boolean} true or false
 *@example
 * const year = leapYears(1992)
 * console.log(year) // true
 */
const leapYears = function (year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};
module.exports = leapYears;
