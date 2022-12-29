import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, Alert } from 'react-native'
import commonStyle from '../../styles/common.style'
import { AuthContext } from '../../context/AuthContext'
import themeStyle from '../../styles/theme.style'

const Login = ({navigation}) => {
    const {login} = useContext(AuthContext);
    // console.warn(context)
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const buttonPressEvent = () => {
        if (!name || !name.trim() || !email || !email.trim()) {
            Alert.alert("Plzz fill all the fields");
        } else {
            console.log(name, email);
            login();
        }
    }
    return (
        <View style={commonStyle.container}>
            <ImageBackground style={{flex:1}} resizeMode="cover" source={require('../../assets/images/login-splash-screen.jpg')}>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', flex:2, padding: 20, justifyContent: 'center'}}>
                        <Text style={commonStyle.h1Text}>Welcome</Text>
                        <Text style={commonStyle.h2Text}>We are happy to see you here! Let's make our daily routine easier!</Text>
                    </View>
                    <View style={{backgroundColor:'white', flex:1, padding: 20}}>
                        <TextInput value={name} onChangeText={setName} style={commonStyle.textInput} placeholder="What's your good name?" placeholderTextColor={'black'} autoComplete="name"></TextInput>
                        <TextInput value={email} onChangeText={setEmail} style={commonStyle.textInput} placeholder="Enter your email address here" placeholderTextColor={'black'} autoComplete="email"></TextInput>
                        <View style={commonStyle.buttonContainer}>
                            <Button color={themeStyle.BUTTON_BG_COLOR} title="Let's Go" onPress={() => buttonPressEvent()}></Button>
                        </View>
                    </View>
                </View>
                {/* <Text style={commonStyle.headingText}>Login Component</Text> */}
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default Login
