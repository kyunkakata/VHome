/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Button, ButtonLabelBorder, ButtonLabel, ButtonIcon } from '../../components';
import * as common from '../../configs/common';
import { Actions } from 'react-native-router-flux';

class SelectTypeLogin extends PureComponent {
  constructor(props) {
    super(props);
    StatusBar.setHidden(true)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Login'
          onPress={this.handLogin}
          rounded
        />
        <ButtonLabelBorder
          title='ksjdfhkd'
          style={{ marginTop: 20 }}
          width={160}
          onPress={this.openAlert}
        />
        <ButtonLabel
          title='Login'
          firstTitle="ban chua co tai khoan"
          textUnderline
        />
        <ButtonIcon
          iconName='menu'
          onPress={() => {
            window.customLoading.show()
          }}
        />
      </View>
    );
  }

  handLogin = () => {
    Actions.login()
  }

  openAlert = () => {
    window.customAlert.alert({
      title: 'thong bao',
      message: 'day la thong bao',
      leftButton: { text: 'OK' }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SelectTypeLogin;
