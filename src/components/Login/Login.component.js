import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import commonStyle from '../../styles/common.style';
import {AuthContext} from '../../context/AuthContext';
import themeStyle from '../../styles/theme.style';

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  // console.warn(context)
  let [name, setName] = useState({text: '', error: false});
  let [email, setEmail] = useState({text: '', error: false});
  const buttonPressEvent = () => {
    if (!name.text.trim() || !email.text.trim()) {
      Alert.alert('Please fill all the fields');
    } else if (name.error || email.error) {
      Alert.alert(name.error ? 'Name is incorrect' : 'Email is incorrect');
    } else {
      login(name, email);
    }
  };
  const validateName = (text) => {
    name = {text: text, error: false};
    setName(name);
  };
  const validateEmail = (text) => {
    email = {text: text, error: false};
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      // Email is Not Correct
      email.error = true;
    }
    setEmail(email);
  };
  return (
    <View style={commonStyle.container}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={require('../../assets/images/login-splash-screen.jpg')}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              flex: 2,
              padding: 20,
              justifyContent: 'center',
            }}>
            <Text style={commonStyle.h1Text}>Welcome</Text>
            <Text style={commonStyle.h2Text}>
              We are happy to see you here! Let's make our daily routine easier!
            </Text>
          </View>
          <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
            <TextInput
              value={name.text}
              onChangeText={text => validateName(text)}
              style={commonStyle.textInput}
              placeholder="What's your good name?"
              placeholderTextColor={'black'}
              autoComplete="name"></TextInput>
            <TextInput
              value={email.text}
              onChangeText={text => validateEmail(text)}
              style={[commonStyle.textInput,(email.error?styles.errorEmailInput:themeStyle.BUTTON_BG_COLOR)]}
              placeholder="Enter your email address here"
              placeholderTextColor={'black'}
              autoComplete="email"></TextInput>
            <View style={commonStyle.buttonContainer}>
              <Button
                color={themeStyle.BUTTON_BG_COLOR}
                title="Let's Go"
                onPress={() => buttonPressEvent()}></Button>
            </View>
          </View>
        </View>
        {/* <Text style={commonStyle.headingText}>Login Component</Text> */}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  errorEmailInput: {
    borderColor: 'red',
  },
});
export default Login;
