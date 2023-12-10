import React, { useState } from 'react';
import Game from './Game';
import GameOverScreen from './GameOverScreen';
import Home from './Home';

export default function App() {
  const [screen, setScreen] = useState('Home');
  const [gameScore, setGameScore] = useState(0);
  const [highScores, setHighScores] = useState([]);

  let component;

  switch (screen) {
    case 'Home':
      component = <Home setScreen={setScreen} />;
      break;
    case 'Game':
      component = <Game setScreen={setScreen} setGameScore={setGameScore} setHighScores={setHighScores} />;
      break;
    case 'GameOver':
      component = <GameOverScreen setScreen={setScreen} gameScore={gameScore} highScoreData={highScores} />;
      break;
    default:
      component = null;
  }

  return <>{component}</>;
}
