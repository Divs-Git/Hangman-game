import {Link} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import Button from '../components/Button/Button';
import {WordContext} from "../Context/WordContext.js";

function Home() {
    const {setWordList, setWord} = useContext(WordContext);

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();

        setWordList([...data])

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
            <Link to="/playgame">
                <Button label={'Single Player Game'}/>
            </Link>
            <br/>
            <Link to="/start">
                <Button label={'Multi-Player Game'} buttonStyleType="warning"/>
            </Link>
        </>
    );
}

export default Home;
