import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';


export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator  />
            <Text>
                Cargando...
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center"
  }
});