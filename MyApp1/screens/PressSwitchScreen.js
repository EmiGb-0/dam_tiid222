import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function PressSwitchScreen() {
    return (
        <View style={styles.container}>
        
        <Pressable
          onPress={() => console.log("Clic Texto")}
          onPressIn={() => console.log("Inició")}
          onPressOut={() => console.log("Terminó")}
          onLongPress={() => console.log("Pulsación larga")}
          onHoverIn={() => console.log("Puntero dentro")}
          onHoverOut={() => console.log("Puntero fuera")}
          delayLongPress={800}
          hitSlop={12}
        >
          <Text style={styles.text}>Interactúa conmigo</Text>
        </Pressable>

        <Pressable
          onPress={() => console.log("Clic Imagen")}
        >
          <Image source={require('../assets/img-press.jpg')} style={styles.image} />
        </Pressable>
        <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    gap: 15
  },
  text: {
    color: '#fff'
  },
  image: {
    width: 100,
    height: 100
  }
});