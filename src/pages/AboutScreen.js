import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function AboutScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    //const name = route.params?.name ?? 'Visitante';// Recebe o nome da Home
    const name = route.params.name?route.params.name : 'Visitante';

    const handleBackButton = () => {
        //navigation.goBack(); // Volta da tela 10 para 9
        //navigation.navigate('Home');
        //navigation.push('Home');
        navigation.popToTop();// volta da tela 10 pra 0
    }

    return (
        <View style={styles.container}>
            <Text>Tela SOBRE: {name}</Text>

            <Button title="Voltar" onPress={handleBackButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AboutScreen;