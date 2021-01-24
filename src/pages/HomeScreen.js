import React, { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';


function HomeScreen() { 

    const navigation = useNavigation();
    const [name, setName] = useState('');

    const produtos=[
        {
            id: '0001',
            name: name
        },
    ];
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:() => <View style={styles.btn}><Button                      
            title="Add."
            onPress={handleHeaderAdd} />                                                  
        </View>
        });
    }, [produtos]);

    const handleHeaderAdd = () => {
        setName([name]);
    }

    useLayoutEffect(()=>{
        navigation.setOptions({            
            headerLeft: () => <Text
                style={{fontWeight:'bold', marginLeft:15}}>Exercício</Text>,        
        });
    }, []);
                      
    return (
        
        <View style={styles.container}>
            <Text style={styles.Text}>Faça um Bolo</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={t=>setName(t)}
                placeholder={'Digite um ingrediente'}
            />
            <View>
                <FlatList 
                    data={produtos}
                    keyExtractor={item=>item.id}
                    renderItem={({key, item})=><View
                        style={styles.prod}>
                            <Text>{key=item.id, item.name}</Text>
                    </View>}
                />
            </View>
                        
        </View>                
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#363636'
    },
    input:{
        width: 300,
        padding: 10,
        fontSize: 12,
        backgroundColor:'#EEE',
        marginTop: 20
    },
    Text:{
        color: '#FFF',
        fontSize: 18,
        marginTop: 20
    },
    btn:{
        marginRight: 15,
    },
    prod:{
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#FF0000'
    },
    letras:{
        color: '#DDD',
        fontSize: 12
    }
});

export default HomeScreen;