import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import SettingsHeader from '@/components/SettingsHeader';
import { FontAwesomeIcons } from '@/components/FontAwesomeIcons'


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
          <Text>Push meldingen</Text>
          <FontAwesomeIcons style={styles.arrowsRight} name='arrow-right' />
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
    backgroundColor: '#F1F8FF',
    height: 1000,
  },
  title: {
    fontSize: 16,
    marginLeft: 30,
    marginBottom: 16,
    fontWeight: '400',
  },
  notificatieContainer: {
    backgroundColor: '#fff',
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
  icon: {
    fontSize: 20,
  },
  arrowsRight: {
    fontSize: 20,
    marginRight: 10,
  }
});
