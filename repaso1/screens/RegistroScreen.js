import { useState } from "react";

import { View, StyleSheet, TextInput, Alert, Text, Switch, Pressable } from "react-native"

export default function RegistroScreen() {

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [cuatrimestre, setCuatrimestre] = useState();

    const [isTaller, setIsTaller] = useState(false);
    const [isConstancia, setIsConstancia] = useState(false);
    const [isDeportes, setIsDeportes] = useState(false);

    const enviarFormulario = () => {
        if (!nombre || !carrera || !cuatrimestre) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            window.alert('Por favor, completa todos los campos.');
            return;
        }
        // Validar que el cuatrimestre/semestre sea un numero
        if (isNaN(cuatrimestre)) {
            Alert.alert('Error', 'El cuatrimestre/semestre debe ser un número.');
            window.alert('El cuatrimestre/semestre debe ser un número.');
            return;
        }


        Alert.alert('Formulario enviado', 
            `Nombre: ${nombre}\n
            Carrera: ${carrera}\n
            Cuatrimestre/Semestre: ${cuatrimestre}\n
            Asistirá al taller: ${isTaller ? 'Sí' : 'No'}\n
            Requiere constancia: ${isConstancia ? 'Sí' : 'No'}\n
            Participará en deportes: ${isDeportes ? 'Sí' : 'No'}`
        );
        window.alert(`Formulario enviado\n
            Nombre: ${nombre}\n
            Carrera: ${carrera}\n
            Cuatrimestre/Semestre: ${cuatrimestre}\n
            Asistirá al taller: ${isTaller ? 'Sí' : 'No'}\n
            Requiere constancia: ${isConstancia ? 'Sí' : 'No'}\n
            Participará en deportes: ${isDeportes ? 'Sí' : 'No'}`
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>
                    Registro de Evento Universitario
                </Text>

                <TextInput
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                    placeholder="Escribe tu nombre..."
                />
                <TextInput 
                    style={styles.input}
                    value={carrera}
                    onChangeText={setCarrera}
                    placeholder="Escribe tu carrera..."
                />
                <TextInput 
                    style={styles.input}
                    value={cuatrimestre}
                    onChangeText={setCuatrimestre}
                    placeholder="¿En que cuatrimestre/semestre estas?"
                />

                <Text style={styles.text}>Opciones</Text>

                <View style={
                    { 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginBottom: 10,
                        marginTop: 10,
                        gap: 10

                    }
                }>
                    <Text style={{ marginLeft: 10, color: '#fff' }}>¿Asistirá al taller?</Text>
                    <Switch
                        value={isTaller}
                        onValueChange={setIsTaller}
                    />
                </View>

                <View style={
                    { 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginBottom: 10,
                        marginTop: 10,
                        gap: 10

                    }
                }>
                    <Text style={{ marginLeft: 10, color: '#fff' }}>¿Requiere constancia?</Text>
                    <Switch
                        value={isConstancia}
                        onValueChange={setIsConstancia}
                    />
                </View>

                <View style={
                    { 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginBottom: 10,
                        marginTop: 10,
                        gap: 10

                    }
                }>
                    <Text style={{ marginLeft: 10, color: '#fff' }}>¿Participará en deportes?</Text>
                    <Switch
                        value={isDeportes}
                        onValueChange={setIsDeportes}
                    />
                </View>

                <Pressable 
                    style={styles.btn}
                    onPress={() => enviarFormulario()}    
                >
                    <Text style={styles.btnText}>Enviar</Text>
                </Pressable>
            </View>
        </View>
    )
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
    card: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    text: {
        color: '#fff',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    btn: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
    }
});