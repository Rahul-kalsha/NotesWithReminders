import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home  from '../components/Home/Home.component'
import AddNote from '../components/AddNotes/AddNote.component'
import NotesList from '../components/NotesList/NotesList.component';
import SetReminder from '../components/SetReminder/SetReminder.component';

const Stack = createNativeStackNavigator();
const ProtectedStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Add Note' component={AddNote}/>
      <Stack.Screen name='Notes List' component={NotesList}/>
      <Stack.Screen name='Set Reminder' component={SetReminder}/>
    </Stack.Navigator>
  );
};
export default ProtectedStackNav;
