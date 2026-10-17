

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {


  return (
    <View style={styles.container}>
      
           <Perfil
            nombre="Emiliano Gonzalez"
            carrera="TIID"
            materia="Desarrollo de Apps Moviles"
            cuatrimestre="4"
          />
          <Perfil
            nombre="Test"
            carrera="TIID"
            materia=""
            cuatrimestre="4"
          />
          <Perfil
            nombre="Bla bla"
            carrera=""
            materia="Desarrollo de Apps Moviles"
            cuatrimestre="4"
          />

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