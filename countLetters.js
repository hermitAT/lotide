const countLetters = function(string) {
  const returnObject = {};

  for (const letter of string) {
    // if letter is not a space, continue through loop
    if (letter !== ' ') {
      // if returnObject contains a property with the same name as the letter, increment up
      if (returnObject[letter]) {
        returnObject[letter] += 1;
      } else {
        // if the property exist yet, set it to equal one
        returnObject[letter] = 1;
      }
    }
  }
  return returnObject;
};

module.exports = countLetters;