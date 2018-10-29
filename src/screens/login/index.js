/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Navbar, Button, Input, InputPassword, ButtonLabel, KeyboardScroll } from '../../components';
import * as common from '../../configs/common';
import langs from '../../languages/common';
import * as imgs from '../../configs/imgs';
import { global } from '../../configs/global';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    }

    StatusBar.setHidden(false)
  }

  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

  render() {
    const { user, pass } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Navbar
            title={langs.login}
            leftIcon
            back
          />
          <View style={styles.viewContent}>
            <View style={styles.viewLogo}>
              <Image source={imgs.logo} resizeMode='contain' style={styles.logo} />
            </View>
            <View style={styles.viewMiddle}>
              <Input
                placeholder={langs.phonenumber}
                keyboardType='numeric'
                rounded
                borderWidth={0.7}
                style={styles.inputPhonenumber}
                leftIcon
                leftIconName='call'
                textInputRef="user"
                ref="user"
                onSubmitEditing={() => this.focusNextField("pass")}
                maxLength={15}
                value={user}
                onChangeText={this.onChangeUser}
              />
              <InputPassword
                placeholder={langs.password}
                rounded
                borderWidth={0.7}
                style={styles.inputPassword}
                leftIcon
                textInputRef="pass"
                ref="pass"
                returnKeyType="done"
                maxLength={32}
                value={pass}
                onChangeText={this.onChangePassword}
              />
              <View style={styles.viewButtonLogin}>
                <Button
                  title={langs.login}
                  onPress={this.handLogin}
                  rounded
                  width={140}
                />
              </View>
            </View>
            <View style={styles.viewFooter}>
              <View style={styles.viewRegisterButton}>
                <ButtonLabel
                  title={langs.register}
                  firstTitle={langs.notRegister}
                  onPress={this.handRegister}
                />
                <ButtonLabel
                  title={langs.forgotPassword}
                  textUnderline
                  onPress={this.handForgotPassword}
                />
              </View>
              <View style={styles.viewLoginWithFacebook}>
                <Button
                  title={langs.loginWithFacebook}
                  rounded
                  style={{ marginBottom: 40 }}
                  onPress={this.handLoginWithFacebook}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  onChangeUser = (user) => {
    this.setState({ user })
  }

  onChangePassword = (pass) => {
    this.setState({ pass })
  }

  handLogin = () => {
    Actions.dashboard()
    return;

    const { user, pass } = this.state;
    if (user.trim().length == 0) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorPhonenumberIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }

    if (pass.trim().length == 0) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorPassIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }

    Actions.dashboard();
  }

  handRegister = () => {
    Actions.register()
  }

  handForgotPassword = () => {
    Actions.forgotPassword()
  }

  handLoginWithFacebook = () => {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewContent: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR
  },
  viewLogo: {
    flex: 1,
    alignItems: 'center'
  },
  viewMiddle: {
    flex: 2,
    alignItems: 'center'
  },
  viewFooter: {
    flex: 2
  },
  logo: {
    height: 100,
    marginTop: 20
  },
  inputPhonenumber: {
    marginTop: 50
  },
  inputPassword: {
    marginTop: 20
  },
  viewButtonLogin: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  viewRegisterButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewLoginWithFacebook: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Login;
