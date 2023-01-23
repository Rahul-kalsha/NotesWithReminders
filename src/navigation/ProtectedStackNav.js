import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home  from '../components/Home/Home.component'
import AddNote from '../components/AddNotes/AddNote.component'
import NotesList from '../components/NotesList/NotesList.component';
import SetReminder from '../components/SetReminder/SetReminder.component';
import DrawerNav from '../navigation/DrawerNav';

const Stack = createNativeStackNavigator();
const HeaderTitle = (props) => {
  console.log('props:', JSON.stringify(props, null, 2));
  return <View>
    <Text style={{fontSize: 20, fontWeight: '600'}}>{props.children}</Text>
  </View>
}
const HomeDrawer = () => {
  return <DrawerNav></DrawerNav>
}
const ProtectedStackNav = () => {
  let navigation = useNavigation();
  const menuPressEvent = () => {
    // navigation.navigate('RootNav')
    // navigation.openDrawer();
  }
  return (
    <>
    <Stack.Navigator screenOptions={{headerShown: true}} initialRouteName='HomeDrawer'>
      {/* <Stack.Screen name='Home' component={Home} options= {({navigation}) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <FontAwesomeIcon name='bars' size={30} style={{color: 'black'}}></FontAwesomeIcon>
          </TouchableOpacity>
        )
      })}/> */}
      <Stack.Screen name='Add Note' component={AddNote} options={{
        title: 'ADD NOTES',
        headerRight: () => (
          <TouchableHighlight onPress={() => {menuPressEvent()}}>
            <FontAwesomeIcon name='bars' size={30} style={{color: 'black'}}></FontAwesomeIcon>
          </TouchableHighlight>
        )
      }}/>
      <Stack.Screen name='Notes List' component={NotesList} options = {{
        title: 'NOTES LIST',
        headerBackButtonMenuEnabled: false,
        headerBackVisible: true,
        headerBackTitle: 'BACk'
      }}/>
      <Stack.Screen name='Set Reminder' component={SetReminder}/>
      <Stack.Screen name='HomeDrawer' component={HomeDrawer} options= {({navigation}) => ({
          headerShown:false
      })}/>
    </Stack.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
});
export default ProtectedStackNav;
