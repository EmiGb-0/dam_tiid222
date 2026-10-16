import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Perfil } from './components/Perfil';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo React Native</Text>


      <Image source={require('./assets/wave.png')}></Image>

      <Text style={styles.text}>--------------</Text>

      <Saludo></Saludo>
      <Saludo />

      <Text style={styles.text}>--------------</Text>

      <Saludo2 />

      <Text style={styles.text}>--------------</Text>

      <Perfil/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
    color: '#fff'
  }
});