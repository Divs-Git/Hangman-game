import { Link, useLocation } from 'react-router-dom';
import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons';
import { useState } from 'react';
import Hangman from '../components/Hangman/Hangman';
import Button from '../components/Button/Button';

function PlayGame() {
  const { state } = useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log('Correct');
    } else {
      console.log('Wrong');
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <div>
      <h1>Play Game</h1>
      <MaskedText
        inputText={state.wordSelected}
        guessedLetters={guessedLetters}
      />
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
      <div>
        <Hangman step={step} />
      </div>
      <div>
        <Link to="/">
          <Button label={'Back to home'} />
        </Link>
      </div>
    </div>
  );
}

export default PlayGame;
