import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, SafeAreaView, View, Text } from 'react-native';
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons' 
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.topBar}>
        <FontAwesomeIcons name='minus' />
        <ThemedText type='subtitle' >
          Taken
        </ThemedText>
        <FontAwesomeIcons name='plus' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    
  },
  topBar: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
  }
});
