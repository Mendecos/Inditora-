import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

export default function LoginPage({ navigation }: { navigation: any }) {
  // Estados para o formulário de login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  // Estados para o formulário de cadastro
  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:8000/usuarios/${email}`);
      const usuario = await response.json();

      if (usuario && usuario.senha === password) {
        navigation.navigate("Landing", { email });
      } else {
        setWrongInput(true);
        Alert.alert("Erro", "E-mail ou senha incorretos!");
      }
    } catch (error) {
      Alert.alert("Erro", "Algo deu errado");
    }
  };

  const handleCadastro = async () => {
    try {
      const response = await fetch("http://localhost:8000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nomeCadastro,
          email: emailCadastro,
          senha: senhaCadastro,
        }),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      } else {
        Alert.alert("Erro", "Falha ao cadastrar. Verifique os campos.");
      }
    } catch (error) {
      Alert.alert("Erro", "Algo deu errado");
    }
  };

  return (
    <View style={styles.container}>
      {/* Formulário de Cadastro */}
      <View style={styles.cadastroBox}>
        <Text style={styles.titleCadastro}>Cadastre-se</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nomeCadastro}
          onChangeText={setNomeCadastro}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={emailCadastro}
          onChangeText={setEmailCadastro}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senhaCadastro}
          onChangeText={setSenhaCadastro}
          secureTextEntry
        />
        <Button title="Cadastrar" onPress={handleCadastro} color="orange" />
      </View>

      {/* Formulário de Login */}
      <View style={styles.loginBox}>
        <Text style={styles.titleLogin}>Entre na sua conta</Text>
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
          secureTextEntry
          onSubmitEditing={handleLogin}
        />
        {wrongInput && (
          <Text style={styles.alertText}>E-mail ou senha incorretos!</Text>
        )}
        <Button title="Acessar" onPress={handleLogin} color="orange" />
        <View style={styles.outraFormaLogin}>
          <Text>Ou entre com</Text>
          <View style={styles.Iconlogos}>
            <Image
              style={styles.logos}
              source={require("./componentes/img/login/googleLogo.png")}
            />
            <Image
              style={styles.logos}
              source={require("./componentes/img/login/instaLogo.png")}
            />
            <Image
              style={styles.logos}
              source={require("./componentes/img/login/faceLogo.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "rgba(255, 228, 48, 0.5)",
  },
  cadastroBox: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginRight: 20,
  },
  titleCadastro: {
    fontSize: 34,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  loginBox: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 12,
    padding: 20,
  },
  titleLogin: {
    fontSize: 34,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  alertText: {
    color: "red",
    marginBottom: 12,
  },
  outraFormaLogin: {
    alignItems: "center",
    marginTop: 20,
  },
  logos: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  Iconlogos: {
    flexDirection: "row",
    marginTop: 10,
  },
});
