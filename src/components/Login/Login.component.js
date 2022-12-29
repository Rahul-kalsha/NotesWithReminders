import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { headingText } from '../../styles/common.style'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
    // const context = useContext(AuthContext);
    // console.warn(context)
    return (
        <View>
            <Text style={headingText}>Login Component</Text>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default Login
