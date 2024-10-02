import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
} from "react-native";

export default function Carrosel() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.destaqueT}>Destaques da Semana</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal={true} // Adiciona a rolagem horizontal
        showsHorizontalScrollIndicator={true} // Esconde a barra de rolagem horizontal
      >
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTexto}>O segredo nas sombras</Text>
          <Image
            source={require("./img/capalivro.png")}
            style={styles.capalivro}
          />
          <Text style={styles.itemTexto}>Shóstenes S. Formiga</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  item: {
    marginRight: 20, // Adiciona espaçamento entre os itens
    alignItems: "center", // Centraliza os itens no eixo vertical
    padding: 10,
  },
  capalivro: {
    width: 200,
    height: 300,
  },
  destaqueT: {
    display: "flex",
    fontSize: 40,
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  itemTexto: {
    fontSize: 25,
  },
});
