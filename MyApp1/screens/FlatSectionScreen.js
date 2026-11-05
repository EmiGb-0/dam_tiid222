import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Button, FlatList, SectionList } from 'react-native';

const datosFlat = [
  {
    id: 1, 
    nombre: "Juan",
  },
  {
    id: 2, 
    nombre: "Maria",
  },
  {
    id: 3, 
    nombre: "Pedro",
  },
  {
    id: 4, 
    nombre: "Emi",
  },
]

const datosSection = [
  {
    id: 1,
    titulo: "Frutas",
    data: ["Manzana", "Platano"]
  },
  {
    id: 2,
    titulo: "Verduras",
    data: ["Lechuga", "Tomate"]
  },

]

export default function FlatSectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejemplo FlatList</Text>

      <FlatList 
        data={datosFlat}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.nombre}</Text>
        )}
      />

      <SectionList 
        sections={datosSection}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.encabezado}>{section.titulo}</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    gap: 15
  },
  text: {
    color: '#fff'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#fff"
  },
  encabezado: {
    fontSize: 16,
    color: "white"
  },
  item: {
    fontSize: 14,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    color: "#fff"
  }
});