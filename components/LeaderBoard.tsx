import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

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
                        <View style={styles.innerCard}>
                            <Image style={styles.avatar} source={require('../assets/images/memojiPic.jpeg')} />
                            <View style={styles.innerContent}>
                                <Text>3</Text>
                                <Text>1</Text>
                                <Text>32</Text>
                            </View>
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
        marginTop: 10,
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
        backgroundColor: '#fff',
        borderRadius: 50,
        marginRight: 30,
        alignItems: 'center',
    },
    innerContent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 230,
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
    },
});

export default LeaderBoard;