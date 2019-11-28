/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, UIManager} from 'react-native';
import AppRoot from './src/AppRoot';
import SplashScreen from 'react-native-splash-screen';
import PushNotification from './src/ServiceProviders/PushNotfication';
import HelperMethods from 'Helpers/Methods';
import {UserInfoProvider} from './src/AppLevelComponents/Contexts/CxtUserInfo';
class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
    HelperMethods.isPlatformAndroid() &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  render() {
    return (
        <UserInfoProvider>
          <AppRoot />
          <PushNotification />
        </UserInfoProvider>
    );
  }
}

export default App;
