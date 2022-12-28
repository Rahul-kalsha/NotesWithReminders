import React from 'react';
import styles from './Home.component.style';
import { View, Text } from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textAreaTitle}>Home Component</Text>
    </View>
  )
}

export default Home
