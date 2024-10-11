/**
 *
 * @param { The Word which is given as input and is expected to be guessed } originalWord
 * @param { Letters which are already gussed by the user} guessedLetter
 * Ex: originalWord :"HUMBLE"
 * guessedLetters: [H,M,E]
 * returns: "H_M__E"
 */

export function getMaskedString(originalWord, guessedLetters) {
  guessedLetters = guessedLetters.map((l) => l.toUpperCase());
  const guessedLetterSet = new Set(guessedLetters);

  const result = originalWord
    .toUpperCase()
    .split('')
    .map((char) => {
      if (guessedLetterSet.has(char)) {
        return char;
      }
      return '_';
    });

  return result;
}
