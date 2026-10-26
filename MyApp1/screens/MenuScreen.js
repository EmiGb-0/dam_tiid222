import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import PressSwitchScreen from './PressSwitchScreen';
import InputAlertScreen from './InputAlertScreen';
import FlatSectionScreen from './FlatSectionScreen';
import ImageSplashScreen from './ImageSplashScreen';
import ModalBottomScreen from './ModalBottomScreen';
import ActKeyScreen from './ActKeyScreen';

export default function MenuScreen() {

    const [screen, setScreen] = useState("menu");

    switch (screen) {
        case "tarjetasScreen":
            return <TarjetasScreen  />
        case "safeScreen":
            return <SafeScreen />
        case "pressSwitchScreen":
            return <PressSwitchScreen />
        case "inputAlertScreen":
            return <InputAlertScreen />
        case "flatSectionScreen":
            return <FlatSectionScreen />
        case "imageSplashScreen":
            return <ImageSplashScreen />
        case "modalBottomScreen":
            return <ModalBottomScreen />
        case "actKeyScreen":
            return <ActKeyScreen />
        case "menu":
            default:
                return (
                    <View style={styles.container}>
                        <Text>
                            Menu de practicas
                        </Text>

                        <Button title="Menu" onPress={() => setScreen("menu")} />

                        <Button title="Tarjetas" onPress={() => setScreen("tarjetasScreen")} />

                        <Button title="SafeAreaView" onPress={() => setScreen("safeScreen")} />

                        <Button title="PressSwitch" onPress={() => setScreen("pressSwitchScreen")} />

                        <Button title="InputAlert" onPress={() => setScreen("inputAlertScreen")} />

                        <Button title="FlatSection" onPress={() => setScreen("flatSectionScreen")} />

                        <Button title="ImageSplash" onPress={() => setScreen("imageSplashScreen")} />
                        
                        <Button title="ModalBottom" onPress={() => setScreen("modalBottomScreen")} />
                            
                        <Button title="ActKey" onPress={() => setScreen("actKeyScreen")} />
                        
                        
                        <StatusBar style="auto" />
                    </View>
                );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    gap: 15
  }
});