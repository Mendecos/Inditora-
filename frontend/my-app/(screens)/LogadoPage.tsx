import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Logado({ route }: { route: any }) {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Login foi feito com sucesso!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
        <Text style={styles.botaoTexto}>
          Clique aqui para ir para Página Inicial
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  botaoTexto: {
    marginHorizontal: 15, // Espaçamento entre os textos (botões)
    color: "red",
  },
});
