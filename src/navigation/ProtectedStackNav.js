import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home  from '../components/Home/Home.component'

const Stack = createNativeStackNavigator();
const ProtectedStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  );
};
export default ProtectedStackNav;
