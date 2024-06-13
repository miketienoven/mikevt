import { StyleSheet, Image, View } from 'react-native'
import React from 'react'


function HeaderCard() {
  return (
   <View style={styles.Container}>

   </View>
  )
}

export default HeaderCard

const styles = StyleSheet.create({
    Container: {
        height: 220,
        backgroundColor: '#A0DAFF',
        margin: 30,
        borderRadius: 15,
        shadowColor: '#888',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.25,
    }
})