/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { View, AppState } from 'react-native';
import { RNNetworkStateEventEmitter } from "react-native-network-state";
import AppNavigator from './app-navigator';
import Notifi from './notification';
import { Alert, Loading } from './components';
import { global } from './configs/global';

class App extends PureComponent {
  currentState = '';
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    RNNetworkStateEventEmitter.addListener('networkChanged', this._handleNetworkChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    RNNetworkStateEventEmitter.removeListener('networkChanged', this._handleNetworkChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.currentState !== nextAppState) {
      if (nextAppState === 'active') {
        console.log('AppState is active')
      } else if (nextAppState === 'background') {
        console.log('AppState is background')
      } else if (nextAppState === 'inactive') {
        console.log('AppState is inactive')
      }
    }

    this.currentState = nextAppState;
  }

  /**
   * type of data ==>
   * isConnected: boolean
   * type: string
   * isFast: boolean
   */
  _handleNetworkChange = (data) => {
    console.log('_handleNetworkChange', data)
    // global.Loading
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
        <Notifi />
        <Loading ref={ref => global.Loading = ref} loadingRef />
        <Alert ref={ref => global.Alert = ref} />
      </View>
    );
  }
}

export default App;
