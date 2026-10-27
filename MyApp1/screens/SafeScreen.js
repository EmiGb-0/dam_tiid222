import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { StyleSheet, View } from 'react-native';

export default function SafeScreen() {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Practica SafeAreaView y ScrollView</Text>
            <Text style={styles.subtitle}>Desliza hacia abajo para ver mas</Text>

            {[...Array(15)].map((_, index) => (
              <View key={index} style={styles.box}>
                <Text>
                  Registro de prueba {index + 1}
                </Text>
              </View>
            ))}

        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#fff',
    width: "90%",
    padding: 30,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3
  }
});