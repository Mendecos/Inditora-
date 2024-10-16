import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  const handleLogin = () => {
    const validEmail = "rodrigo.a42@gmail.com";
    const validPassword = "rodrigobemlegal";

    if (email === validEmail && password === validPassword) {
      navigation.navigate("Logado", { email });
    } else {
      setWrongInput(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>
        Encontre descubra e desbrave novas leituras na IndieTora
      </Text>
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
        <Button title="Acessar" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    padding: 120,
    backgroundColor: "rgba(255, 228, 48, 0.5)"

  },
  loginBox: {
    marginLeft:40

  },
  textBox: {
    marginRight:120,
    backgroundColor: 'purple',
    borderRadius: 12,
    marginBottom: 60

  },
  titleLogin: {
    fontSize: 34,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 50,
    textAlign: 'left',
    backgroundColor: 'white'
  },
  alertText: {
    color: "red",
    marginHorizontal: "auto",
    marginBottom: 12,
  },
  
});
