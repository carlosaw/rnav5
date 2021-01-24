import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';


const MainStack = createStackNavigator();


export default () => (
    
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle:{
                backgroundColor:'#CCC'
            }            
        }}>
            <MainStack.Screen name="Home" component={HomeScreen} options={{
                /*
                headerLeft: () => <Text
                    style={{fontWeight:'bold', marginLeft:15}}>Exercício</Text>,*/

                headerTitle: () => <Logo />,
                /*
                headerRight: () => (
                    <TouchableOpacity activeOpacity={0.7} > 
                        <Text> Add </Text>
                    </TouchableOpacity>
                )
                */
            }} /> 
            <MainStack.Screen name="About" component={AboutScreen} />
            
        </MainStack.Navigator>
);