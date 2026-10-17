import { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export const Perfil = ({nombre, carrera, materia, cuatrimestre}) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Perfil</Text>
      <Text style={styles.dato}>Nombre: {nombre}</Text>
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
    maxWidth: 280,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgb(13, 17, 22)',
    marginBottom: 14,
  },
  titulo: {
    marginBottom: 10,
    color: '#f9fafb',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  dato: {
    marginBottom: 8,
    color: '#e5e7eb',
    fontSize: 18,
    lineHeight: 20,
  },
  btn: {
    backgroundColor: '#e5e7eb'
  }
});
