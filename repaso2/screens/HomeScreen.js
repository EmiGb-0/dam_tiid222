import { useState } from "react";
// 1. Importamos FlatList y Alert correctamente
import { Text, View, ImageBackground, StyleSheet, TextInput, Pressable, Alert, FlatList } from "react-native";

export default function HomeScreen() {
    const [tituloLibro, setTituloLibro] = useState("");
    const [autorLibro, setAutorLibro] = useState("");
    const [generoLibro, setGeneroLibro] = useState("");
    const [guardando, setGuardando] = useState(false);

    const [listaLibros, setListaLibros] = useState([]);

    const validarFormulario = () => {
        setGuardando(true);

        if (!tituloLibro || !autorLibro || !generoLibro) {
            window.alert("Todos los campos son obligatorios")
            Alert.alert("Error", "Todos los campos son obligatorios");
            setGuardando(false);
            return;
        }

        const nuevoLibro = {
            id: Date.now().toString(), 
            titulo: tituloLibro,
            autor: autorLibro,
            genero: generoLibro
        };

        setListaLibros([...listaLibros, nuevoLibro]);

        Alert.alert("Éxito", "Libro guardado correctamente");

        setTituloLibro("");
        setAutorLibro("");
        setGeneroLibro("");
        
        setGuardando(false);
    };

    return (
        <ImageBackground 
            source={require("../assets/img-press.jpg")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>Catálogo de Libros</Text>

                <TextInput 
                    value={tituloLibro}
                    onChangeText={setTituloLibro}
                    placeholder="Título del libro"
                    style={styles.input}
                />
                <TextInput 
                    value={autorLibro}
                    onChangeText={setAutorLibro}
                    placeholder="Autor del libro"
                    style={styles.input}
                />
                <TextInput 
                    value={generoLibro}
                    onChangeText={setGeneroLibro}
                    placeholder="Género del libro"
                    style={styles.input}
                />

                <Pressable
                    onPress={() => validarFormulario()}
                    style={styles.btn}
                >
                    <Text style={{color: "#fff"}}>{guardando ? "Guardando..." : "Agregar Libro" }</Text>
                </Pressable>
            </View>

            <View style={styles.listaContainer}>
                <Text style={styles.subtitulo}>Libros Guardados</Text>
                
                <FlatList
                    data={listaLibros}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.tarjetaLibro}>
                            <Text style={styles.libroTitulo}>{item.titulo}</Text>
                            <Text style={styles.libroDetalle}>Autor: {item.autor} | Género: {item.genero}</Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={{ textAlign: 'center', color: '#666' }}>No hay libros agregados aún.</Text>
                    }
                />
                <Text>Total de libros: {listaLibros.length}</Text>
            </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
  },
  container: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    marginTop: 40,
    borderRadius: 10
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5
  },
  btn: {
    marginTop: 10,
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center'
  },
  listaContainer: {
    flex: 1, 
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tarjetaLibro: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
  },
  libroTitulo: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  libroDetalle: {
    fontSize: 14,
    color: '#555'
  }
});
