import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from '../Styles'

export default function Bird({birdBottom, birdLeft}) {
  const birdWidth = 50
  const birdHeight = 60

  return (
    <View style={[styles.bird, {
      width: birdWidth,
      height: birdHeight,
      left: birdLeft - (birdWidth / 2),
      bottom: birdBottom - (birdHeight / 2),
    }]}>
      <ImageBackground source={require('../morbius.png')} style={{flex: 1}}></ImageBackground>
    </View>
  )
}