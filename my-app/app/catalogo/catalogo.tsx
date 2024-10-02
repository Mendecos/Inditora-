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

export default function Catalogo() {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.View}
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
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        
    },
    View: {
        backgroundColor: 'pink',
    
    },
    item: {
        display: 'flex',
        
    },
    capalivro: {
        width: 200,
        height: 300,
    }
});
