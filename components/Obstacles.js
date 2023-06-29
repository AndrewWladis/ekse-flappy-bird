import { View, ImageBackground } from 'react-native'
import styles from '../Styles'
import React from 'react'

export default function Obstacles({ randomBottom, obstaclesLeft, obstacleHeight, obstacleWidth, gap}) {
    return (
        <>
            <ImageBackground
                style={[styles.obstacles, {
                    width: obstacleWidth,
                    height: obstacleHeight,
                    left: obstaclesLeft,
                    bottom: randomBottom + obstacleHeight + gap
                }]}
                source={require('../building.png')}
            />
            <ImageBackground
                source={require('../building.png')}
                style={[styles.obstacles, {
                    width: obstacleWidth,
                    height: obstacleHeight,
                    left: obstaclesLeft,
                    bottom: randomBottom
                }]}
            />
        </>
    )
}