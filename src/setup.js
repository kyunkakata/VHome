/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

'use strick';

import React, { PureComponent } from 'react';
import { LayoutAnimation, UIManager, Text, YellowBox, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';
import { CustomLayoutSpring } from './common/animation';
import App from './app';
import configureStore from './redux/configureStore';
import { setFont } from './common/utils';

// Disable ignored remote debugger
YellowBox.ignoreWarnings([
  'Remote debugger',
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes',
  'Required dispatch_sync to load constants for RNDeviceInfo'
]);
Text.allowFontScaling = false;

// Set font family default
setFont('Quicksand');

class Setup extends PureComponent {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = {
      isLoading: true,
      store: configureStore(() => {
        this.closeSplashScreen();

        LayoutAnimation.configureNext(CustomLayoutSpring);
        this.setState({ isLoading: false });
      })
    }
  }

  closeSplashScreen = () => {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 200,
      delay: 200,
    });
  }

  render() {
    const { store } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent barStyle='light-content' />
        <Provider store={store}>
          <App />
        </Provider>
      </View>
    );
  }
}

export default Setup;