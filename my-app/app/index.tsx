import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Sobre from './corpo/sobre';
import Carrosel from './carrosel/carrosel'
import Catalogo from './catalogo/catalogo';


const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.logotipo}>
          <Image
            source={require('./img/logo.png')} // Caminho para a imagem local
            style={styles.logo}
          />
          <Image
            source={require('./img/logoescrito.png')} // Caminho para a imagem local
            style={styles.logoEscrito}
          />
        </View>
        <View>
        </View>
        <View style={styles.botoesContainer}>
          <TouchableOpacity onPress={() => alert('Home clicado')}>
            <Text style={styles.botaoTexto}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Livros clicado')}>
            <Text style={styles.botaoTexto}>Livros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Sobre Nós clicado')}>
            <Text style={styles.botaoTexto}>Sobre Nós</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Entrar clicado')} >
            <Text style={styles.botaoEntrar}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Entrar clicado')}>
            <Text style={styles.botaoCad}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Sobre />
      <Carrosel />
      <Catalogo />
      


    </View>

  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  logotipo: {
    display: 'flex',
    flexDirection: 'row'
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
    flexDirection: 'row',

  },
  botaoTexto: {
    marginHorizontal: 15, // Espaçamento entre os textos (botões)
    color: 'white'
  },
  botaoEntrar: {
    marginHorizontal: 15,
    color: 'orange',
  },
  botaoCad: {
    backgroundColor: 'purple',
    color: 'white',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 15
  }


});

export default Header;

