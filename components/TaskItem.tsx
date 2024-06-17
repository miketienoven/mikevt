import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

function TaskItem() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titel}>Vloer Dweilen</Text>
                <Text style={styles.kamer}>Keuken</Text>
                <Text style={styles.tijd}>Tijd: 15:00 - 16:00</Text>
            </View>
            <Image style={styles.avatar} source={require('../assets/images/memojiPic.jpeg')} />
            <View style={styles.before}>
                <TabBarIcon name={'camera'} color='#fff' />
                <Text style={styles.beforeText}>Before</Text>
            </View>
            <View style={styles.after}>
                <TabBarIcon name={'camera'} color='#fff' />
                <Text style={styles.afterText}>After</Text>
            </View>
        </View>
    )
}

export default TaskItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        width: 330,
        marginVertical: 5,
        backgroundColor: '#FFB3BA',
        borderRadius: 15,
    },
    titel: {
        fontSize: 18,
        color: '#000',
        paddingLeft: 15,
        paddingBottom: 8,
        paddingTop: 13,
    },
    kamer: {
        fontSize: 14,
        color: '#000',
        paddingLeft: 15,
        paddingBottom: 10,
    },
    tijd: {
        paddingLeft: 15,
        fontSize: 14,
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 25,
        marginVertical: 'auto',
        marginLeft: 10,
    },
    before: {
        backgroundColor: '#0FAA01',
        width: 60,
        height: 75,
        borderRadius: 10,
        marginVertical: 'auto',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    beforeText: {
        color: '#fff',
        fontSize: 10,
        paddingTop: 5,
    },
    after: {
        backgroundColor: '#A0A0A0',
        width: 60,
        height: 75,
        borderRadius: 10,
        marginVertical: 'auto',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.25,
        elevation: 5,
    },
    afterText: {
        color: '#fff',
        fontSize: 10,
        paddingTop: 5,
    },
});