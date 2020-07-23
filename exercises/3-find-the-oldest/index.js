/** The function seeks for the biggest value and returns a string
 * @param {array} a given array of object
 * @param {string} a returning value of the object - name
 * @example
 *
 * const findThatPerson = findTheOldest((people).name);
 * console.log(findThatPerson); // Name
 *
 */
let findTheOldest = function (obj) {
  let oldest = 0;
  let man = "";
  let dt = new Date();
  let today = dt.getFullYear();
  for (let person of obj) {
    let calc =
      "yearOfDeath" in person
        ? person.yearOfDeath - person.yearOfBirth
        : today - person.yearOfBirth;
    if (calc > oldest) {
      oldest = calc;
      man = person;
    }
  }
  return man;
};

module.exports = findTheOldest;
