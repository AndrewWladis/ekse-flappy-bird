import { View, Text, ImageBackground, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Styles';
import * as SecureStore from 'expo-secure-store';
import NetInfo from '@react-native-community/netinfo';
import { useFonts } from 'expo-font';

export default function GameOverScreen({ setScreen, gameScore, highScoreData }) {
    const [isConnected, setIsConnected] = useState(true);
    const [finalScore, setFinalScore] = useState(gameScore + 1)
    const [isHighScore, setIsHighScore] = useState(false)
    const [yourName, setYourName] = useState(null);
    const [hasDataBeenSent, setHasDataBeenSent] = useState(false);

    useFonts({
        'Pixel': require('./assets/DePixelHalbfett.ttf'),
    });

    const showAlertWithInput = () => {
        Alert.prompt(
          'Enter your name for the leaderboard.',
          'Enter your name',
          (text) => setYourName(text),
          'plain-text',
        );
      };

    useEffect(() => {
        async function setHighScore() {
            const highScore = await SecureStore.getItemAsync('ekseHighScore')
            if (highScore === null || Number(highScore) < finalScore) {
                await SecureStore.setItemAsync('ekseHighScore', String(finalScore));
                setIsHighScore(true)
            }
        }
        const unsubscribe = NetInfo.addEventListener(state => {
            if (!state.isConnected) {
                setIsConnected(false)
            }
        });

        setHighScore()
        unsubscribe();

        if (!hasDataBeenSent && isConnected && highScoreData[4].score < finalScore) {
            showAlertWithInput()
        }
    }, [])

    useEffect(() => {
        if (yourName !== null && yourName !== "") {
            
            const addToLeaderboard = async () => {
                try {
                    const response = await fetch('https://correct-boxd-backend.onrender.com/add-to-leaderboard', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: yourName,
                            score: finalScore
                        }),
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const result = await response.json();
                    console.log(result);
                } catch (error) {
                    console.error('An error occurred:', error.message);
                    // Handle error accordingly
                } finally {
                    setHasDataBeenSent(true)
                }
            };

            addToLeaderboard();
        }
    }, [yourName])


    return (
        <ImageBackground style={styles.menuPage} source={require('./background.png')}>
            <View>
                {isHighScore ? <Text style={styles.newHighScore}>NEW HIGH SCORE!</Text> : null}
                <Text style={styles.gameOverTitle}>GAME OVER</Text>
                <Text style={styles.gameOverScoreTitle}>YOU SCORED <Text style={styles.score}>{finalScore}</Text></Text>

                {(isConnected && (highScoreData.length !== 0)) ?
                    (
                        <View style={styles.listContainer}>
                            <FlatList
                                data={highScoreData}
                                keyExtractor={(item) => item._id}
                                ListHeaderComponent={() => (
                                    <View style={styles.leaderboardHeader}>
                                        <Text style={[styles.highScoreListScore, { fontFamily: 'Pixel' }]}>Leaderboard</Text>
                                    </View>
                                )}
                                renderItem={({ item }) => (
                                    <View style={styles.item}>
                                        <Text style={[styles.usernameList, { fontFamily: 'Pixel' }]}>{item.name}</Text>
                                        <Text style={[styles.highScoreListScore, { fontFamily: 'Pixel' }]}>{item.score}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    ) : null
                }
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