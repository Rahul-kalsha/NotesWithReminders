import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home  from '../components/Home/Home.component'
import AddNote from '../components/AddNotes/AddNote.component'
import NotesList from '../components/NotesList/NotesList.component';
import SetReminder from '../components/SetReminder/SetReminder.component';

const Stack = createNativeStackNavigator();
const HeaderTitle = (props) => {
  console.log('props:', JSON.stringify(props, null, 2));
  return <View>
    <Text style={{fontSize: 20, fontWeight: '600'}}>{props.children}</Text>
  </View>
}
const menuPressEvent = ({navigation}) => {
  // const navigation = useNavigation();
  navigation.openDrawer();
  // console.log('?????navigation:')
}
const ProtectedStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name='Home' component={Home} options= {{
        // headerTitle: (props) => <HeaderTitle {...props} />,
        headerRight: (props) => (
          <TouchableOpacity>
            <FontAwesomeIcon name='bars' size={30} style={{color: 'black'}} onPress={() => menuPressEvent()}></FontAwesomeIcon>
          </TouchableOpacity>
        )
      }}/>
      <Stack.Screen name='Add Note' component={AddNote} options={{
        title: 'ADD NOTES',
        headerRight: () => (
          <TouchableOpacity>
            <FontAwesomeIcon name='bars' size={30} style={{color: 'black'}} onPress={() => menuPressEvent()}></FontAwesomeIcon>
          </TouchableOpacity>
        )
      }}/>
      <Stack.Screen name='Notes List' component={NotesList} options = {{
        title: 'NOTES LIST',
        headerBackButtonMenuEnabled: false,
        headerBackVisible: true,
        headerBackTitle: 'BACk'
      }}/>
      <Stack.Screen name='Set Reminder' component={SetReminder}/>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
});
export default ProtectedStackNav;
