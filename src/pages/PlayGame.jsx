import {Link} from 'react-router-dom';
import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons';
import {useContext, useState} from 'react';
import Hangman from '../components/Hangman/Hangman';
import Button from '../components/Button/Button';
import {WordContext} from "../Context/WordContext.js";

function PlayGame() {

    const {word} = useContext(WordContext);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (word.toUpperCase().includes(letter)) {
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
            {word && (
                <>
                    <MaskedText
                        inputText={word}
                        guessedLetters={guessedLetters}
                    />
                    <div>
                        <LetterButtons
                            text={word}
                            guessedLetters={guessedLetters}
                            onLetterClick={handleLetterClick}
                        />
                    </div>
                    <div>
                        <Hangman step={step}/>
                    </div>
                    <div>
                        <Link to="/">
                            <Button label={'Back to home'}/>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default PlayGame;
