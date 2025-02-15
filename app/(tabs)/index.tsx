import { Image, StyleSheet, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Hey Arfin <HelloWave /></ThemedText>
        <ThemedText style={styles.title}>
          <MaterialIcons name="notifications-none" size={28} color="#fffff" />
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.searchBar}>
        <MaterialIcons name="search" size={20} color="#fff" />
        <ThemedText>Search...</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000'
  },
  title: {
    fontSize: 20,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    gap: 10,
    marginTop: 20
  }
});
