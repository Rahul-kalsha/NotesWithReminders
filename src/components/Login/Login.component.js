import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './Login.component.style'
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

export default Login
