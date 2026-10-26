import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';

export default function TarjetasScreen() {
    return (
        <View style={styles.container}>
        
            <Perfil
                nombre="Emiliano Gonzalez"
                carrera="TIID"
                materia="Desarrollo de Apps Moviles"
                cuatrimestre="4"
                style={styles.tarjeta1}
            />
            <Perfil
                nombre="Test"
                carrera="TIID"
                materia=""
                cuatrimestre="4"
                style={styles.tarjeta2}
            />
            <Perfil
                nombre="Bla bla"
                carrera=""
                materia="Desarrollo de Apps Moviles"
                cuatrimestre="4"
                style={styles.tarjeta3}
            />

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
  tarjeta1: {backgroundColor: "rgb(13, 17, 22)"},
  tarjeta2: {backgroundColor: "rgb(13, 17, 22)"},
  tarjeta3: {backgroundColor: "rgb(13, 17, 22)"}
});