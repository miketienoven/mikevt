import { Image, StyleSheet, Platform, View } from 'react-native';
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Avatar from '@/components/Avatar';
import CalendarRow from '@/components/CalendarRow';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import Schedule from '@/components/Calander';
import HeaderCard from '@/components/HeaderCard';
import TaskList from '@/components/TaskList';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <FontAwesomeIcons name='plus' color='#F1F8FF' />

        <ThemedText type='subtitle' style={styles.pageTitle}>
          Taken
        </ThemedText>
        <FontAwesomeIcons name='plus' />
      </View>
      <View style={styles.verticalScrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <Avatar />
        </ScrollView>
        <HeaderCard />
        <ThemedText type='default' style={styles.headerTitle}>
          Agenda
        </ThemedText>
        <CalendarRow />
      </View>
      <TaskList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F1F8FF'
  },
  scrollView: {
    // marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingBottom: 16,

    // maxHeight: 100,
  },
  pageTitle: {
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 20,
    paddingBottom: 10,
    paddingHorizontal: 30,
  },
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  verticalScrollView: {
    backgroundColor: '#F1F8FF',
  }
});
