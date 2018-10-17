/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Navbar, Button } from '../../components';
import * as common from '../../configs/common';
import langs from '../../languages/common';
import { Actions } from 'react-native-router-flux';

class Login extends PureComponent {
  constructor(props) {
    super(props);

    StatusBar.setHidden(false)
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar
          title={langs.login}
          leftIcon
          back
        />
        <View style={styles.viewContent}>
          <Button
            title='Register'
            onPress={this.handRegister}
            rounded
          />
        </View>
      </View>
    );
  }

  handRegister = () => {
    Actions.register()
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

export default Login;
