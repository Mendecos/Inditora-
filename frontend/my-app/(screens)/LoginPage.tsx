import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Image } from "react-native";

export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  const handleLogin = () => {
    const validEmail = "rodgab.com";
    const validPassword = "123";

    if (email === validEmail && password === validPassword) {
      navigation.navigate("Logado", { email });
    } else {
      setWrongInput(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.curiosidade}>
        <Text style={styles.textBox}>
          Curiosidade sobre leitura
        </Text>
        <Text style={styles.textBox2}>
          Ler em silêncio era considerado uma heresia
          Uma vez que a literacia foi um privilégio reservado a uma elite durante milhares de anos,
          a leitura começou por ser uma atividade oral e coletiva. Desde a Roma Antiga até ao
          século XIX, as sessões de leituras públicas eram uma forma de entretenimento tão popular
          como os malabaristas ou os bobos na corte. Para além disso, esta era uma forma de continuar
          a preservar a transmissão de obras banidas pelas autoridades, das quais foram exemplo as
          obras de Jean-Jacques Rousseau.

        </Text>
        <Text style={styles.textBox2}>
        Fonte: amoreiras.com
        </Text>
      </View>
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
          <Text>
            Ou entre com
          </Text>
          <View style={styles.Iconlogos}>
            <Image style={styles.logos}
              source={require("../componentes/login/img/googleLogo.png")}
            />
            <Image style={styles.logos}
              source={require("../componentes/login/img/instaLogo.png")}
            />
            <Image style={styles.logos}
              source={require("../componentes/login/img/faceLogo.png")}
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 120,
    backgroundColor: "rgba(255, 228, 48, 0.5)"

  },
  loginBox: {
    marginLeft: 40,
    backgroundColor: 'purple',
    borderRadius: 12,
    padding: 20, // Adiciona espaço interno

  },
  textBox: {
    padding: 20, // Adiciona espaço interno
    textAlign: 'center', // Centraliza o texto
    justifyContent: 'center', // Centraliza verticalmente
    fontSize: 30,
    fontWeight: "bold",
  },
  textBox2:{
    fontSize: 20,
    textAlign: 'left',       // Garante o alinhamento à esquerda
    maxWidth: 400,           // Define uma largura máxima para o texto quebrar
    lineHeight: 24,          // Aumenta a altura da linha para facilitar a leitura
  },
  titleLogin: {
    fontSize: 34,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: 'white'

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

  outraFormaLogin: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60

  },
  logos: {
    width: 30, // Defina a largura desejada
    height: 30, // Defina a altura desejada
    resizeMode: 'contain', // Esta propriedade garante que a imagem mantenha a proporção original
    marginHorizontal: 10, // Adiciona espaçamento entre as imagens (opcional)
  },
  Iconlogos: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 100
  },
  curiosidade:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white',
    borderRadius: 12  
  }

});
