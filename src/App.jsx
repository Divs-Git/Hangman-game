import {Route, Routes} from 'react-router-dom';
import './App.css';
import StartGame from './pages/StartGame';
import PlayGame from './pages/PlayGame';
import Home from './pages/Home';
import {WordContext} from "./Context/WordContext.js";
import {useState} from "react";

function App() {
    const [wordList, setWordList] = useState([]);
    const [word, setWord] = useState('');
    return (
        <WordContext.Provider value={{wordList, setWordList, word, setWord}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/start" element={<StartGame/>}/>
                <Route path="/playgame" element={<PlayGame/>}/>
            </Routes>
        </WordContext.Provider>

    );
}

export default App;
