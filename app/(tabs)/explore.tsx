import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, SafeAreaView, View, Text, useColorScheme } from 'react-native';
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons' 
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LeaderBoard from '@/components/LeaderBoard';

const colorScheme = useColorScheme();

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.topBar}>
        <FontAwesomeIcons name='minus' color={colorScheme === 'dark' ? '#fff' : '#000'}/>
        <ThemedText type='subtitle' >
          Bewoners
        </ThemedText>
        <FontAwesomeIcons name='plus' color={colorScheme === 'dark' ? '#fff' : '#000'}/>
      </View>
      <LeaderBoard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorScheme === 'dark' ? '#242628' : '#F1F8FF',
    flex: 1,
  },
  topBar: {
    marginHorizontal: 30,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
 
});
