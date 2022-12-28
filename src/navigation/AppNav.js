import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext, AuthProvider } from '../context/AuthContext'
import { LoginComponent } from '../components/Login/Login.component'
import { HomeComponent } from '../components/Home/Home.component'

const AppNav = () => {
    const { userToken, isLoading } = useContext(AuthContext);
    // console.warn(userToken, isLoading)
    if (isLoading) {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
            </View>
        )
    }
    return (
        <NavigationContainer>
            {userToken !== null ? <HomeComponent/> : <LoginComponent/>}
            {/* <LoginComponent/> */}
            {/* <HomeComponent></HomeComponent> */}
        </NavigationContainer>
    );
}

export default AppNav;
