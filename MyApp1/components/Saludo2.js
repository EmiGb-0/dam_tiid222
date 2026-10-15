import { Text, StyleSheet, Image, Button, View } from "react-native"


export const Saludo2 = () => {
    return  (
        <View>
            <Text style={styles.text}>
                Hola RN! Soy un componente propio compuesto
            </Text>

            <Image source={require('../assets/wave.png')}></Image>

            <Button title="Presiona para saludar"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});