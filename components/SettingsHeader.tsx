import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons'

function SettingsHeader() {
    return (
        <View style={styles.Container}>
            <Image style={styles.headerImg} source={require('../assets/images/memojiPic.jpeg')} />
            <View style={styles.Content}>
                <ThemedText type='subtitle' style={styles.Naam}>Mike</ThemedText>
                <FontAwesomeIcons name='edit' color='#000' style={styles.icon}/>
            </View>
        </View>

    )
}

export default SettingsHeader

const styles = StyleSheet.create({
    Container: {
        height: 225,
        backgroundColor: '#A0DAFF',
        marginHorizontal: 30,
        borderRadius: 15,
        shadowColor: '#888',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.4,
        marginBottom: 12,
    },
    headerImg: {
        width: 140,
        height: 140,
        marginHorizontal: 'auto',
        marginTop: 10,
        borderRadius: 70,
        borderWidth: 5,
        borderColor: "white"
    },
    Content: {
        margin: 10,
    },
    Naam: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
    },
    icon: {
        textAlign: 'right',
        marginRight: 10,
    },
})