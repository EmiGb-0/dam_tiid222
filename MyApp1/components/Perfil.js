import { StyleSheet, Text, View } from 'react-native';

export const Perfil = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Perfil</Text>
      <Text style={styles.dato}>Nombre: Emiliano Gonzalez</Text>
      <Text style={styles.dato}>Carrera: TIID</Text>
      <Text style={styles.dato}>Materia: Desarrollo Aplicaciones Moviles</Text>
      <Text style={styles.dato}>Cuatrimestre: 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 360,
    padding: 24,
    borderRadius: 20,
    backgroundColor: 'rgb(13, 17, 22)',
  },
  titulo: {
    marginBottom: 16,
    color: '#f9fafb',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  dato: {
    marginBottom: 12,
    color: '#e5e7eb',
    fontSize: 18,
    lineHeight: 24,
  },
});
