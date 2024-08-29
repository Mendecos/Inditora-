import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

export default function HomeScreen() {
  
  return (
    <View style={{backgroundColor: 'red', padding: 20}}>
      <Text >
        CineArt Ingressos Online
      </Text>
      <View>
        <Image source={require('./img/bloco.png')} style={{width: 100, height: 100}}/>
      </View>
      
    </View>
    
    

  );
}

const styles = StyleSheet.create({
  meuBotao: {
    margin: 20
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
