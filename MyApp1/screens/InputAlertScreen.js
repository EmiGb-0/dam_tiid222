import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function InputAlertScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>InputAlertScreen</Text>

        <StatusBar style="auto" />
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
});