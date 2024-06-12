import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Avatar = () => {

    const memojiUrls = [
        'https://raw.githubusercontent.com/alohe/memojis/main/png/1627.png',
        'https://raw.githubusercontent.com/alohe/memojis/main/png/1949.png',
        'https://raw.githubusercontent.com/alohe/memojis/main/png/2529.png',
        'https://raw.githubusercontent.com/alohe/memojis/main/png/2738.png',
        'https://raw.githubusercontent.com/alohe/memojis/main/png/3201.png',
        'https://raw.githubusercontent.com/alohe/memojis/main/png/3359.png',
    ]

    const randomMemoji = memojiUrls[Math.floor(Math.random() * memojiUrls.length)];

    return (
        <View style={styles.container}>
            {memojiUrls.map((url, index) => (
                <View key={index} style={styles.circle}>
                    <Image style={styles.memoji} source={{ uri: url }}></Image>
                </View>
            ))}
        </View>

    )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        marginEnd: 40
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    memoji: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
})