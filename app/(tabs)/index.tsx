import { Image, StyleSheet, Platform, View } from 'react-native';
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Avatar from '@/components/Avatar';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import Schedule from '@/components/Calander';
import HeaderCard from '@/components/HeaderCard';

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
      <ScrollView horizontal style={styles.scrollView}>
        <Avatar />
      </ScrollView>
      <HeaderCard/>
      <ScrollView style={styles.verticalScrollView}>
        <ThemedText type='default' style={styles.headerTitle}>
          Agenda
        </ThemedText>
        < Schedule/>
      </ScrollView>
    </SafeAreaView>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="title">Hallo allemaal dit is een test.xX</ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
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
    paddingBottom: 40,
    maxHeight: 70,
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
    padding: 20,
    justifyContent: 'space-between',
  },
  verticalScrollView: {
    backgroundColor: '#F1F8FF',
  }
});
