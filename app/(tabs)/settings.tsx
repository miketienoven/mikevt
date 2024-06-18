import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ScrollView } from 'react-native';
import { SafeAreaView, useColorScheme } from 'react-native';
import SettingsHeader from '@/components/SettingsHeader';
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons'


const colorScheme = useColorScheme();

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type='subtitle' style={styles.headerTitle}>
        Instellingen
      </ThemedText>

      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Profiel
        </Text>
        <SettingsHeader />
        <Text style={styles.title}>
          Notificaties</Text>
        <View style={styles.notificatieContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcons style={styles.icon} name='bell' color={'#267BFA'}/>
          </View>
          <Text style={styles.text}>Push meldingen</Text>
          <FontAwesomeIcons style={styles.arrowsRight} name='arrow-right' color={colorScheme === 'dark' ? '#fff' : '#000'} />
        </View>
         <Text style={styles.title}>
          Thema's</Text>
        <View style={styles.notificatieContainer}>
          <View style={styles.iconContainerThema}>
            <FontAwesomeIcons style={styles.icon} name='image' color={'#2ACF00'}/>
          </View>
          <Text style={styles.text}>Thema kiezen</Text>
          <FontAwesomeIcons style={styles.arrowsRight} name='arrow-right' color={colorScheme === 'dark' ? '#fff' : '#000'} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor:colorScheme === 'dark' ? '#242628' : '#F1F8FF',
    height: 1000,
  },
  title: {
    fontSize: 16,
    marginLeft: 30,
    marginBottom: 8,
    marginTop: 16,
    fontWeight: '400',
    color: colorScheme === 'dark' ? '#fff' : '#000',
  },
  notificatieContainer: {
    backgroundColor: colorScheme === 'dark' ? '#3B3B3B' : '#fff',
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 35,
  },
  iconContainer: {
    backgroundColor: '#A0DAFF',
    padding: 10,
    borderRadius: 25,
  },
  iconContainerThema: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#A0FFAF',
  },
  icon: {
    fontSize: 20,
  },
  arrowsRight: {
    fontSize: 20,
    marginRight: 10,
  },
  text: {
   color: colorScheme === 'dark' ? '#fff' : '#000'
  },
});
