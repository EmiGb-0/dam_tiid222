import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MenuScreen from './screens/MenuScreen';

export default function App() {
  return <MenuScreen />;
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
  }
});