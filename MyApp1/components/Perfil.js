import { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export const Perfil = ({nombre, carrera, materia, cuatrimestre, color, style}) => {
  const [mostrar, setMostrar] = useState(false);

  
  
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.titulo}>Perfil</Text>
      <Text style={[styles.dato, styles.nombre]}>{nombre}</Text>
      <Button 
        title={mostrar ? 'Ocultar Perfil' : 'Mostrar Perfil'}
        onPress={() => setMostrar(!mostrar)}
        style={styles.btn}
      />
      {mostrar && (
        <>
          <Text style={styles.dato}>Carrera: {carrera}</Text>
          <Text style={styles.dato}>Materia: {materia}</Text>
          <Text style={styles.dato}>Cuatrimestre: {cuatrimestre}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 200,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgb(13, 17, 22)',
    marginBottom: 14,
  },
  titulo: {
    marginBottom: 10,
    color: '#f9fafb',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  dato: {
    marginBottom: 8,
    color: '#e5e7eb',
    fontSize: 14,
    lineHeight: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  carrera: {
    fontSize: 18,
    color: 'purple',
    fontFamily: "Roboto"
  },
  otroTexto: {
    fontSize: 12,
    fontFamily: "Courier",
    fontStyle: "italic",
    color: '#e5e7eb',
  }
});
