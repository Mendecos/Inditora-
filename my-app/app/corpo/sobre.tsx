import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function sobre() {
  return (
    <View>
      <View style={styles.sobre}>
        <View>
          <Text style={styles.texto1}>Encontre o que procura na Indie!</Text>
          <Text style={styles.texto2}>Ainda não sabe qual será  sua próxima leitura? Temos uma coleção cheia de
            surpresas para você!
          </Text>

        </View>
        <View>
          <Image
            source={require('./img/logo.png')} // Caminho para a imagem local
            style={styles.logo}
          />
        </View>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  logo: {
    width: 220,
    height: 190,
  },
  sobre: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 80,
    backgroundColor: 'rgba(255, 228, 48, 0.5)' // Fundo 50% de opacidade (RGBA)
  },
  texto1: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  texto2:{
    fontSize: 21
  }

});


