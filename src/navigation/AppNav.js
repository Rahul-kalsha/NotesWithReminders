import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext, AuthProvider} from '../context/AuthContext';
import ProtectedStackNav from './ProtectedStackNav';
import UnProtectedStackNav from './UnProtectedStackNav';
import Home  from '../components/Home/Home.component'
import Login from '../components/Login/Login.component'

const AppNav = () => {
  const {userToken, isLoading} = useContext(AuthContext);
  // console.warn(userToken, isLoading)
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'}></ActivityIndicator>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <ProtectedStackNav /> : <UnProtectedStackNav />}
      {/* {userToken !== null ? <Home /> : <Login />} */}
    </NavigationContainer>
  );
};

export default AppNav;
