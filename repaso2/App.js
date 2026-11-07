import { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, ScrollView } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => (
      setIsLoading(false)
    ), 3000)
  })

  if (isLoading) {
    return <SplashScreen />
  } else {
    return (
      <ScrollView style={styles.container}>
        <HomeScreen />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});