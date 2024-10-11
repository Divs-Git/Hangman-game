import { getMaskedString } from './MaskingUtility';

function MaskedText({ inputText, guessedLetters }) {
  const maskedString = getMaskedString(inputText, guessedLetters);

  return (
    <div>
      {maskedString.map((letter, idx) => {
        return (
          <span key={idx} className="mx-1">
            {letter}
          </span>
        );
      })}
    </div>
  );
}

export default MaskedText;
