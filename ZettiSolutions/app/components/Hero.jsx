import React from 'react'
import { StyleSheet, Image } from 'react-native'

const Hero = () => {
  return (
    <Image 
        style={styles.heroImage}
        source={require('../../assets/pc.jpg')}
        resizeMode='contain'
    />
  )
}

const styles = StyleSheet.create({
    heroImage: {
        height: '100%',
        width: '100%',
        flex: 1
    }
})

export default Hero