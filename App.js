import React, { useState } from 'react'
import Game from './Game'
import GameOverScreen from './GameOverScreen';
import Home from './Home'

export default function App() {
  const [screen, setScreen] = useState('Home')
  const [gameScore, setGameScore] = useState(0)

  return (
    <>
      {(screen == 'Home') ? <Home setScreen={setScreen} /> : (screen == 'Game') ? <Game setScreen={setScreen} setGameScore={setGameScore} /> : <GameOverScreen setScreen={setScreen} gameScore={gameScore} />}
    </>
  )
}