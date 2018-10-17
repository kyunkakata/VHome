/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar, Button } from '../../components';
import * as common from '../../configs/common';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

class ForgotPassword extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          title='Forgot password'
          leftIcon
          back
        />
        <View style={styles.viewContent}>
          {/* <Button
            title='Login'
            onPress={this.handLogin}
            rounded
          /> */}
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>
      </View>
    );
  }

  handLogin = () => {
    Actions.pop()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewContent: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default ForgotPassword;
