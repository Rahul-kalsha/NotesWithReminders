import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Base64 from '../utils/Base64';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({name: '', email: ''})
  const login = (name, email) => {
    setLoading(true);
    const decodedData = Base64.btoa(name.text + ':' + email.text);
    console.log('Login Tap', name, email, decodedData);
    setUserToken(decodedData);
    AsyncStorage.setItem('userToken', decodedData);
    setLoading(false);
    // Set User Data in state 
    userInfo.name = name.text;
    userInfo.email = email.text;
    setUserInfo(userInfo);
    // Set User Data in state 
  };
  const logout = () => {
    setLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      setLoading(true);
      let getUserTokenFromStorage = await AsyncStorage.getItem('userToken');
      setUserToken(getUserTokenFromStorage);
      setLoading(false);
      // Set User Data in state
      let encodedData = Base64.atob(getUserTokenFromStorage);
      encodedData = encodedData.split(":")
      userInfo.name = encodedData[0];
      userInfo.email = encodedData[1];
      setUserInfo(userInfo);
      // Set User Data in state
      console.log('set userInfo:', userInfo)
    } catch (error) {
      console.log(`Loggdin Error ${error}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{login, logout, userToken, isLoading, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
