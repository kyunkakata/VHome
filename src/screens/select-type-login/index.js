/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Button } from '../../components';
import * as common from '../../configs/common';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

class SelectTypeLogin extends PureComponent {
  constructor(props) {
    super(props);
    StatusBar.setHidden(true)
  }

  render() {
    return (
      <View style={styles.container}>
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
    );
  }

  handLogin = () => {
    Actions.login()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default SelectTypeLogin;
