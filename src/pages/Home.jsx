import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';

function Home() {
  const [word, setWord] = useState('');

  async function fetchWords() {
    const response = await fetch('http://localhost:3000/words');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);
    setWord(data[randomIndex].wordValue);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <React.Fragment>
      <Link to="/playgame" state={{ wordSelected: word }}>
        <Button label={'Single Player Game'} />
      </Link>
      <br />
      <Link to="/start">
        <Button label={'Multi-Player Game'} buttonStyleType="warning" />
      </Link>
    </React.Fragment>
  );
}

export default Home;
