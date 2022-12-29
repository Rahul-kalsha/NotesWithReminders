import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const login = () => {
    setLoading(true); 
    setUserToken('ABC');
    AsyncStorage.setItem('userToken', 'ABC');
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
    login();
    // isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{login, logout, userToken, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
