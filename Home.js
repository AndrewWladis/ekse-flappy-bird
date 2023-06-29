import { ImageBackground, Text, TouchableOpacity, Image, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Styles'
import * as SecureStore from 'expo-secure-store';

export default function Home({ setScreen }) {
    const [highScore, setHighScore] = useState(null)
    const [character, setCharacter] = useState('morbius')

    useEffect(() => {
        (async () => {
            const scoreStorage = await SecureStore.getItemAsync('ekseHighScore');
            setHighScore(scoreStorage);
        })();
    }, [])

    return (
        <ImageBackground style={styles.menuPage} source={require('./background.png')}>
            <View style={styles.colCenter}>
                <Text style={styles.title}>EKSE</Text>
                {(highScore !== null) ? <Text style={styles.gameOverScoreTitle}>HIGH SCORE: {highScore}</Text> : null}
            </View>
            <TouchableOpacity style={[styles.menuButton, styles.marginVertical]} onPress={() => { setScreen('Game') }}>
                <Text style={styles.menuButtonTitle}>START</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}