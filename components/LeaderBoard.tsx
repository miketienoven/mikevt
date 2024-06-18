import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, useColorScheme } from 'react-native';

const colorScheme = useColorScheme();

function LeaderBoard() {
    return (
        <View>
            <View style={styles.legenda}>
                <Text style={styles.legendaText}>Gedaan</Text>
                <Text style={styles.legendaText}>To-do</Text>
                <Text style={styles.legendaText}>Lifetime</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {[...Array(10)].map((_, index) => (
                    <View style={styles.card} key={index}>
                        <Text style={styles.rank}>{index + 1}</Text>
                        <View style={styles.outerCard}>
                            <View style={styles.innerCard}>
                                <Image style={styles.avatar} source={require('../assets/images/memojiPic.jpeg')} />
                                <View style={styles.innerContent}>
                                    <Text style={styles.text}>3</Text>
                                    <Text style={styles.text}>1</Text>
                                    <Text style={styles.text}>32</Text>
                                </View>
                            </View>
                            <Text style={styles.label}>Mike</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingBottom: 120,
    },
    rank: {
        fontSize: 13,
        color: 'grey',
        fontWeight: '500',
        marginHorizontal: 10,
        marginVertical: 'auto',
    },
    card: {
        flexDirection: 'row',
        
        marginLeft: 48,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    innerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 270,
        marginLeft: 10,
        paddingLeft: 4,
        paddingVertical: 4,
        backgroundColor: colorScheme === 'dark' ? '#3B3B3B' : '#fff',
        borderRadius: 50,
        marginRight: 30,
        alignItems: 'center',
    },
    innerContent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 230,
        color: colorScheme === 'dark' ? '#000' : '#FFF',
    },
    label: {
        marginBottom: 10,
        marginLeft: 24,
        marginTop: 3,
        color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    legenda: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 45,
        marginLeft: 140,
        marginRight: 30,
        paddingBottom: 15,
    },
    legendaText: {
        fontSize: 10,
        color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    outerCard: {},
    text: {
        color: colorScheme === 'dark' ? '#fff' : '#000',
    },
});

export default LeaderBoard;