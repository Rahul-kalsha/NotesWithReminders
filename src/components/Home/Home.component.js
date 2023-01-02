import React, {useContext, useEffect, useState} from 'react';
import styles from './Home.component.style';
import { View, Text, FlatList } from 'react-native';
import {AuthContext} from '../../context/AuthContext'

const Home = (props) => {
  const {userInfo} = useContext(AuthContext);
  const [name, setName] = useState(userInfo.name);
  const menuData = [
    {
      id: 1,
      title: 'Notes List',
      iconname: 'notebook'
    },
    {
      id: 2,
      title: 'Home',
      iconname: 'home'
    },
    {
      id: 3,
      title: 'Note Reminder',
      iconname: 'reminder'
    }
  ];
  useEffect(() => {
    setTimeout(() => {
      // console.log('userInfo:useEffect', props, userInfo);
      setName(userInfo.name);
   });
  }, []);
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>Hello {name},</Text>
        <View>
          <FlatList data={menuData}>

          </FlatList>
        </View>
    </View>
  )
}

export default Home
