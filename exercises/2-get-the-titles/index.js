/**
 *@param {arr} array of the given objects
 @param {arr} array of specific properties of the objects 
 @example
const titles = getTheTitles(books);
console.log(titles); //['Book', 'Book2']
 */
const getTheTitles = (arr) => {
  return arr.map((book) => book.title);
};

module.exports = getTheTitles;
