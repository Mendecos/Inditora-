import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carrosel from "./componentes/carrossel/Carrossel";
import Sobre from "./Sobre";

function LandingPage() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <View style={styles.logotipo}>
          <Image
            source={require("../componentes/img/logo.png")} // Caminho para a imagem local
            style={styles.logo}
          />
          <Image
            source={require("../componentes/img/logoescrito.png")} // Caminho para a imagem local
            style={styles.logoEscrito}
          />
        </View>

        <View style={styles.botoesContainer}>
          <TouchableOpacity onPress={() => alert("Home clicado")}>
            <Text style={styles.botaoTexto}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Livros clicado")}>
            <Text style={styles.botaoTexto}>Livros</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.botaoTexto}>Sobre Nós</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("/")}>
            <Text style={styles.botaoTexto}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Sobre />
      <Carrosel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, // Permite que a barra de rolagem ocupe todo o espaço disponível
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
  },
  logotipo: {
    display: "flex",
    flexDirection: "row",
  },
  logoEscrito: {
    width: 200,
    height: 50,
  },
  logo: {
    width: 90,
    height: 60,
  },
  botoesContainer: {
    flexDirection: "row",
  },
  botaoTexto: {
    marginHorizontal: 15, // Espaçamento entre os textos (botões)
    color: "white",
  },
  botaoEntrar: {
    marginHorizontal: 15,
    color: "orange",
  },
  botaoCad: {
    backgroundColor: "purple",
    color: "white",
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default LandingPage;
