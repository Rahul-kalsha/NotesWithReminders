import React, {useContext, useEffect, useState} from 'react';
import styles from './Home.component.style';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import {AuthContext} from '../../context/AuthContext'
import commonStyle from '../../styles/common.style'
import {windowHeight, windowWidth} from '../../utils/Dimensions'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Home = (props) => {
  const navigation = useNavigation();
  const {userInfo} = useContext(AuthContext);
  const [name, setName] = useState(userInfo.name);
  const menuData = [
    {
      id: 1,
      title: 'Notes List',
      routeName: 'Notes List',
      iconname: 'list-alt'
    },
    {
      id: 2,
      title: 'Home',
      routeName: 'Home',
      iconname: 'home'
    },
    {
      id: 3,
      title: 'Note Reminder',
      routeName: 'Set Reminder',
      iconname: 'bell'
    },
    {
      id: 4,
      title: 'Create Note',
      routeName: 'Add Note',
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
    navigation.navigate(item.routeName, {item});
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[commonStyle.customButton, {display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', textAlignVertical: 'center'}]} onPress={() => onMenuPress({item})}>
      <>
        <FontAwesomeIcon name={item.iconname} size={25} style={{color: 'white', textAlignVertical: 'center'}}></FontAwesomeIcon>
        <Text style={[commonStyle.customButtonText, {marginLeft: 5, textAlignVertical: 'center'}]}>{item.title}</Text>
      </>
    </TouchableOpacity>
  );
  // console.warn('windowWidth:', windowWidth);
  // console.warn('windowHeight:', windowHeight);
  return (
    <View style={[{flex: 1, justifyContent:'space-between'}]}>
        <View style={{backgroundColor: 'orange', alignSelf: 'flex-start', width: '100%'}}>
          <Text style={[styles.textTitle]}>Hello {name}, TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST </Text>
        </View>
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{padding: 5, backgroundColor: 'lightblue'}}>
                <Text style={{fontSize: 40}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ab suscipit? Odio quo veniam alias ex at beatae adipisci, vero sint perspiciatis non tempore autem quae doloremque fuga sapiente amet. </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{maxHeight: 70, backgroundColor: 'lightgreen'}}>
            <FlatList scrollEnabled={true} data={menuData}  horizontal={true} showsHorizontalScrollIndicator={false} renderItem={renderItem} keyExtractor={item => item.id} 
            />
        </View>
    </View>
  )
}
export default Home
