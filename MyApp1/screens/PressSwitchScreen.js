
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function PressSwitchScreen() {
  const [mensaje, setMensaje] = useState('Interactúa con los elementos');
  const [imagenGrande, setImagenGrande] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Práctica Pressable</Text>

      {/* Pressable con texto */}
      <Pressable
        onPress={() => setMensaje('¡Presionaste el texto!')}zz
        onLongPress={() => setMensaje('¡Pulsación larga detectada!')}
        delayLongPress={800}
        style={styles.boton}
      >
        <Text style={styles.text}>Presióname</Text>
      </Pressable>

      {/* Pressable con imagen */}
      <Pressable
        onPress={() => {
          setImagenGrande(!imagenGrande);
          setMensaje('¡Presionaste la imagen!');
        }}
      >
        <Image
          source={require('../assets/img-press.jpg')}
          style={[
            styles.image,
            imagenGrande && styles.imagenGrande
          ]}
        />
      </Pressable>

      <Text style={styles.mensaje}>{mensaje}</Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    gap: 25,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10
  },
  text: {
    color: '#fff',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  imagenGrande: {
    width: 180,
    height: 180
  },
  mensaje: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});
