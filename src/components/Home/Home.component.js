import React, {useContext, useEffect, useState} from 'react';
import styles from './Home.component.style';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {AuthContext} from '../../context/AuthContext'
import commonStyle from '../../styles/common.style'
// import Icon  from 'react-native-vector-icons/icon';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const Home = (props) => {
  const {userInfo} = useContext(AuthContext);
  const [name, setName] = useState(userInfo.name);
  const menuData = [
    {
      id: 1,
      title: 'Notes List',
      iconname: 'list-alt'
    },
    {
      id: 2,
      title: 'Home',
      iconname: 'home'
    },
    {
      id: 3,
      title: 'Note Reminder',
      iconname: 'bell'
    },
    {
      id: 4,
      title: 'Create Note',
      iconname: 'plus-square'
    }
  ];
  useEffect(() => {
    setTimeout(() => {
      // console.log('userInfo:useEffect', props, userInfo);
      setName(userInfo.name);
   });
  }, []);
  const onMenuPress = ({item}) => {
    console.log('??????', item);
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity style={commonStyle.customButton} onPress={() => onMenuPress({item})}>
      <FontAwesomeIcon name={item.iconname} size={30} ></FontAwesomeIcon>
      <Text style={commonStyle.customButtonText}>{item.title}</Text>
    </TouchableOpacity>
    // <Item title={item.title} />
  );
  return (
    <View style={[styles.container, {flex: 1, justifyContent:'space-between'}]}>
        <View style={{backgroundColor: 'orange', alignSelf: 'flex-start'}}>
          <Text style={[styles.textTitle]}>Hello {name},</Text>
        </View>
        <View style={{padding: 5, backgroundColor: 'lightblue'}}>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'lightgreen', padding: 5}}>
          <FlatList data={menuData} contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent:'flex-end'}}  horizontal={false} numColumns={3} renderItem={renderItem} keyExtractor={item => item.id}>
          </FlatList>
        </View>
    </View>
  )
}
export default Home
