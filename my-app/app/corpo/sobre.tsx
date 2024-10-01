import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function sobre() {
  return (
    <View>
      <View style={styles.sobre}>
        <View>
          <Text style={styles.texto1}>Encontre o que procura na Indie!</Text>
          <Text>Ainda não sabe qual será  sua próxima leitura? Temos uma coleção cheia de
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
    width: 90,
    height: 60,
  },
  sobre: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 80
  },
  texto1: {
    fontSize: 50,
    
  }

});


