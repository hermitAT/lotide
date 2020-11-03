const letterPositions = function(string) {
  const letterIdxLibrary = {};
  
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    
    if (letter !== ' ') {
      // if the property doesn't exist yet, create it and create an array
      // containing the index
      if (!Array.isArray(letterIdxLibrary[letter])) {
        letterIdxLibrary[letter] = [i];
      } else {
        // if letterIdxLibrary contains a property with the same name as the letter,
        // push the index that the letter is at to an array within that property.
        letterIdxLibrary[letter].push(i);
      }
    }
  }
  return letterIdxLibrary;
};

module.exports = letterPositions;