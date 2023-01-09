import React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import NotesList from '../components/NotesList/NotesList.component';
import SetReminder from '../components/SetReminder/SetReminder.component';
import Home from '../components/Home/Home.component';
import AddNote from '../components/AddNotes/AddNote.component';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
        <Drawer.Screen name='Add Note' component={AddNote}></Drawer.Screen>
        <Drawer.Screen name='Notes List' component={NotesList}></Drawer.Screen>
        <Drawer.Screen name='Set Reminder' component={SetReminder}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default DrawerNav
