/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar, Button } from '../../components';
import * as common from '../../configs/common';
import { Actions } from 'react-native-router-flux';

class Register extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          title='Register'
          leftIcon
          back
        />
        <View style={styles.viewContent}>
          <Button
            title='Login'
            onPress={this.handLogin}
            rounded
          />
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
  }
});

export default Register;
