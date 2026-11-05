import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Input({text, }) {
    // 1. Creamos un estado para almacenar el texto del input
    const [nombre, setNombre] = useState('');

    // 2. Función que maneja la lógica y muestra la alerta
    const manejarEnvio = () => {
        // Validación básica: si está vacío, muestra una alerta de error
        if (nombre.trim() === '') {
        Alert.alert(
            'Campos vacíos', // Título
            'Por favor, escribe tu nombre antes de continuar.', // Mensaje
            [{ text: 'Entendido' }] // Botón de cierre
        );
        return;
        }

        // Alerta de confirmación con dos botones (Aceptar / Cancelar)
        Alert.alert(
        'Confirmación',
        `¿Estás seguro de que tu nombre es ${nombre}?`,
        [
            {
            text: 'Cancelar',
            onPress: () => console.log('Acción cancelada'),
            style: 'cancel', // Estilo nativo de cancelación (en iOS se ve diferente)
            },
            {
            text: 'Sí, seguro',
            onPress: () => {
                console.log('Nombre guardado:', nombre);
                // Aquí puedes limpiar el input si lo deseas
                setNombre('');
            },
            },
        ]
        );
    };

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Escribe tu nombre:</Text>
        
        {/* 3. El TextInput que actualiza el estado */}
        <TextInput
            style={styles.input}
            placeholder="Ej. Juan Pérez"
            value={nombre}
            onChangeText={(texto) => setNombre(texto)} // Actualiza el estado con cada letra
        />

        {/* 4. Botón que dispara la alerta */}
        <Button title="Enviar" onPress={manejarEnvio} />
        </View>
    );
}

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});
