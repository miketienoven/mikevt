import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <ThemedText type='subtitle' style={styles.headerTitle}>
          Instellingen
        </ThemedText>
      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F8FF',
  },
});
