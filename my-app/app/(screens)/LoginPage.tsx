import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

export default function LoginPage({ navigation }: { navigation: any }) {
  console.log(navigation);
  const [email, setEmail] = useState(""); // Estado para guardar o e-mail conforme está sendo escrito
  const [password, setPassword] = useState(""); // Estado para guardar a senha conforme está sendo escrita
  const [wrongInput, setWrongInput] = useState(false); // Estado para guardar a validação dos campos e exibir mensagem de erro

  /**
   * Função para lidar com o login após o clique no botão
   * Idealmente, neste momento seria realizada uma requisição para uma API de autenticação
   */
  const handleLogin = () => {
    const validEmail = "waloch@senacrs.com.br";
    const validPassword = "123456";

    // Se os dados forem válidos, passar para a página 'Home' passando como argumento o email
    // Caso contrário, seta como verdadeiro para exibir o campo de mensagem
    if (email === validEmail && password === validPassword) {
      navigation.navigate("Logado", { email });
    } else {
      setWrongInput(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // ofusca o texto, ideal para senhas
        onSubmitEditing={handleLogin} // Caso o usuário pressione Enter quando está digitando neste campo, chamamos a função para validar o login
      />
      {wrongInput && (
        <Text style={styles.alertText}>E-mail ou senha incorretos!</Text>
      )}
      <Button title="Acessar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  alertText: {
    color: "red",
    marginHorizontal: "auto",
    marginBottom: 12,
  },
});
