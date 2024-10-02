import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Logado({ route }: { route: any }) {
  const { email } = route.params; // Acessando o parâmetro e-mail

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Inicial!</Text>
      <Text style={styles.title}>Seu e-mail é: {email}</Text>
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
});
