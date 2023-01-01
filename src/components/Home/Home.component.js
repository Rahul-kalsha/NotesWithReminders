import React, {useContext, useEffect, useState} from 'react';
import styles from './Home.component.style';
import { View, Text } from 'react-native';
import {AuthContext} from '../../context/AuthContext'

const Home = (props) => {
  const {userInfo} = useContext(AuthContext);
  const [name, setName] = useState(userInfo.name);
  useEffect(() => {
    setTimeout(() => {
      setName(userInfo.name);
   });
  }, []);
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>Hello {name},</Text>
    </View>
  )
}

export default Home
