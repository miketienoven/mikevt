import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'

function HeaderCard() {
    return (
        <View style={styles.Container}>
            <Image
                style={styles.headerImg}
                source={require('../assets/images/austranaut.png')}
            />
            <View style={styles.Content}>
                <Text style={styles.cardTitle}>
                    Je hoeft nog maar 1 taak!
                </Text>
            </View>
            <View style={styles.contentParameters}>
                <View style={styles.donePar}>
                    <Text style={styles.cardTextStyling}>
                        <ThemedText type='title' >3 </ThemedText>{"\n"}
                        Gedaan
                    </Text>
                </View>
                <Text style={styles.cardTextStyling}>
                    <ThemedText type='title' >2 </ThemedText>{"\n"}
                    To-Do
                </Text>
                <Text style={styles.cardTextStyling}>
                    <ThemedText type='title' >4 </ThemedText>{"\n"}
                    Luiste {"\n"}bewoner
                </Text>
            </View>
        </View >
    )
}

export default HeaderCard

const styles = StyleSheet.create({
    Container: {
        height: 225,
        backgroundColor: '#A0DAFF',
        marginHorizontal: 30,
        borderRadius: 15,
        shadowColor: '#888',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.25,
    },
    headerImg: {
        width: 140,
        height: 140,
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    Content: {
        margin: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -25,
    },
    contentParameters: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        marginTop: -5,
    },
    cardTextStyling: {
        color: '#444',
        textAlign: 'center',

    },
    donePar: {
        flexDirection: 'column',
        textAlign: 'center',
    }
})