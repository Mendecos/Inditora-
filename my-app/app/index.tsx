import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Sobre from './corpo/sobre';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'logo.png' }}
        style={styles.logo}
      />
      <View>
        
      </View>
      <View style={styles.botoesContainer}>
        <Button title="Entrar" onPress={() => alert('Entrar clicado')} />
        <Button title="Login" onPress={() => alert('Login clicado')} />
      </View>
      
    </View>

  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'blue',
  },
  logo: {
    width: 40,
    height: 40,
  },
  botoesContainer: {
    flexDirection: 'row',
  },
});

export default Header;

