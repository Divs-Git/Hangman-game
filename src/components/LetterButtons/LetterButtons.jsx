import React from 'react';

const ALPHABETS = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
function LetterButtons({ text, guessedLetters, onLetterClick }) {
  const originalLetters = new Set(text.toUpperCase().split(''));
  const guessedLettersSet = new Set(guessedLetters);

  const buttonStyle = function (letter) {
    if (guessedLettersSet.has(letter)) {
      return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
    } else {
      return 'bg-blue-500';
    }
  };

  function handleLetterClick(e) {
    const characterOfTheLetter = e.target.value;
    onLetterClick?.(characterOfTheLetter);
  }

  const buttons = ALPHABETS.map((letter, index) => {
    return (
      <button
        key={`buttons-${index}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={guessedLettersSet.has(letter)}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
      >
        {letter}
      </button>
    );
  });

  return <React.Fragment>{buttons}</React.Fragment>;
}

export default LetterButtons;
