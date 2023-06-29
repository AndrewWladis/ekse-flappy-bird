import { Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import styles from './Styles';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles'
import { useEffect, useState } from 'react';

export default function Game({setScreen, setGameScore}) {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height

  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegTwoHeight, setObstaclesNegTwoHeight] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const obstacleWidth = 60;
  const obstacleHeight = 300
  const gap = 150;
  const gravity = 1;
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdTwo;

  function gameOver() {
    clearInterval(gameTimerId)
    clearInterval(obstaclesLeftTimerId)
    clearInterval(obstaclesLeftTimerIdTwo)
    setIsGameOver(true);
    setScreen('Over')
    setGameScore(score)
  }

  function jump() {
    if (!isGameOver && birdBottom < screenHeight) {
      setBirdBottom(birdBottom => birdBottom + 50)
    }
  }

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 10)

      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [birdBottom])

  //start first obstacles
  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerId)
      }
    } else {
      setObstaclesLeft(screenWidth)
      setObstaclesNegHeight(- Math.random() * 100)
      setScore(score => score + 1)
    }
  }, [obstaclesLeft])

  //start seconds obstacles
  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo)
      }
    } else {
      setObstaclesNegTwoHeight(- Math.random() * 100)
      setObstaclesLeftTwo(screenWidth)
      setScore(score => score + 1)
    }
  }, [obstaclesLeftTwo])

  //check for collisions
  useEffect(() => {
    if (
      ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeight + obstacleHeight + gap - 30)) &&
        (obstaclesLeft > screenWidth / 2 - 30 && obstaclesLeft < screenWidth / 2 + 30)
      )
      ||
      ((birdBottom < (obstaclesNegTwoHeight + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegTwoHeight + obstacleHeight + gap - 30)) &&
        (obstaclesLeftTwo > screenWidth / 2 - 30 && obstaclesLeftTwo < screenWidth / 2 + 30)
      )
    ) {
      gameOver()
    }
  })

  return (
    <TouchableWithoutFeedback style={styles.gameBackground} onPress={jump}>
      <ImageBackground source={require('./background.png')} style={styles.container}>
        <Bird
          birdBottom={birdBottom}
          birdLeft={birdLeft}
        />
        <Obstacles
          obstaclesLeft={obstaclesLeft}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          randomBottom={obstaclesNegHeight}
          gap={gap}
        />
        <Obstacles
          obstaclesLeft={obstaclesLeftTwo}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          randomBottom={obstaclesNegTwoHeight}
          gap={gap}
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}