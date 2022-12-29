import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login/Login.component'

const Stack = createNativeStackNavigator();
const UnProtectedStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
  );
};
export default UnProtectedStackNav;
