import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        initialRouteName="TabHome"       
        screenOptions={({route})=>({ 
            tabBarIcon:() => <TabBarIcon name={route.name} />
        })}
        tabBarOptions={{
            keyboardHidesTabBar: true,
            style:{
                height: 70,
                padding: 10
            }
        }}
        > 
       
        <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
        <Tab.Screen name="TabHome" component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Tab.Screen name="TabConfig" component={TabConfigScreen} options={{tabBarLabel:'Config'}} />
    </Tab.Navigator>
);