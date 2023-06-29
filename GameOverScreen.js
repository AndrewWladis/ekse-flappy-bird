import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Styles';
import * as SecureStore from 'expo-secure-store';

export default function GameOverScreen({ setScreen, gameScore }) {
    const [finalScore, setFinalScore] = useState(gameScore + 1)
    const [isHighScore, setIsHighScore] = useState(false)

    useEffect(() => {
        async function setHighScore() {
            const highScore = await SecureStore.getItemAsync('ekseHighScore')
            if (highScore === null || Number(highScore) < finalScore) {
                await SecureStore.setItemAsync('ekseHighScore', String(finalScore));
                setIsHighScore(true)
            }
        }
        setHighScore()
    }, [])
    return (
        <ImageBackground style={styles.menuPage} source={require('./background.png')}>
            <View>
                {isHighScore ? <Text style={styles.newHighScore}>NEW HIGH SCORE!</Text> : null}
                <Text style={styles.gameOverTitle}>GAME OVER</Text>
                <Text style={styles.gameOverScoreTitle}>YOU SCORED <Text style={styles.score}>{finalScore}</Text></Text>
            </View>
            <View>
                <TouchableOpacity style={styles.menuButton} onPress={() => { setScreen('Game') }}>
                    <Text style={styles.menuButtonTitle}>RESTART</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menuButton, styles.marginTop]} onPress={() => { setScreen('Home') }}>
                    <Text style={styles.menuButtonTitle}>MENU</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}