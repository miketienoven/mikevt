import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, SafeAreaView, View, Text } from 'react-native';
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons' 
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LeaderBoard from '@/components/LeaderBoard';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.topBar}>
        <FontAwesomeIcons name='minus' />
        <ThemedText type='subtitle' >
          Bewoners
        </ThemedText>
        <FontAwesomeIcons name='plus' />
      </View>
      <LeaderBoard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F8FF',
    flex: 1,
  },
  topBar: {
    marginHorizontal: 30,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
 
});
