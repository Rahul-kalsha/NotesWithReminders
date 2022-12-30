import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Base64 from '../utils/Base64';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const login = (name, email) => {
    setLoading(true);
    const encodedData = Base64.atob(name.text+':'+email.text);
    console.log('Login Tap', name, email, encodedData);
    // const decodedData = Base64.btoa(encodedData);
    // console.log('Login>>>', name, email, decodedData);
    // setUserToken('ABC');
    // AsyncStorage.setItem('userToken', 'ABC');
    setLoading(false);
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
    } catch (error) {
      console.log(`Loggdin Error ${error}`);
    }
  };
  useEffect(() => {
    console.log('useEffect AuthContext');
    // login();
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{login, logout, userToken, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
