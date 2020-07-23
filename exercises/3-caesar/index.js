/**
 *
 */
const caesar = (str, num) => {
  return str
    .toUpperCase()
    .replace(/[A-Za-z]/gi, (c) =>
      String.fromCharCode(((c.charCodeAt(0) - 65 + num) % 26) + 65)
    );
};

module.exports = caesar;
