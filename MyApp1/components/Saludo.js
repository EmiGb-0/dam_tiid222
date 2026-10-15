import { Text, StyleSheet } from "react-native"


export const Saludo = () => {
    return  (
        <Text style={styles.text}>
            Hola RN! Soy un componente propio
        </Text>
    )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});