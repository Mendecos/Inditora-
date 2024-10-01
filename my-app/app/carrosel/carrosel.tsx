import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    Image
} from 'react-native';

export default function Carrosel() {
    return (
        
        <SafeAreaView style={styles.container}>
            <Text>Destaques da Semana</Text>
            <ScrollView 
                style={styles.scrollView} 
                horizontal={true} // Adiciona a rolagem horizontal
                showsHorizontalScrollIndicator={false} // Esconde a barra de rolagem horizontal
            >
                
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                <View style={styles.item}>
                    <Text>O segredo nas sombras</Text>
                    <Image 
                        source={require('./img/capalivro.png')} 
                        style={styles.capalivro} 
                    />
                    <Text>Shóstenes S. Formiga</Text>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    item: {
        marginRight: 20, // Adiciona espaçamento entre os itens
        alignItems: 'center', // Centraliza os itens no eixo vertical
    },
    capalivro: {
        width: 200,
        height: 300,
    }
});
