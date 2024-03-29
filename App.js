/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useContext, useEffect } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './src/components/Home/Home.component';
import LoginComponent from './src/components/Login/Login.component';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const safeAreaViewStyle = {
    backgroundColor: backgroundStyle,
    flex:1
  }
  // const {userToken, isLoading} = useContext(AuthContext); 
  // console.warn(userToken, isLoading)
  return (
    <SafeAreaView style={safeAreaViewStyle} forceInset={{ bottom: 'never' }}>
      <AuthProvider>
        <AppNav></AppNav>
        {/* <NavigationContainer>
            <LoginComponent></LoginComponent>
            <HomeComponent isDarkMode={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
          </NavigationContainer> */}
      </AuthProvider>
    </SafeAreaView>
    // <StatusBar
    //   barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //   backgroundColor={backgroundStyle.backgroundColor}
    //   />
    // <ScrollView
    //   contentInsetAdjustmentBehavior="automatic"
    //   style={backgroundStyle}>
    //   <Header />
    // </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
