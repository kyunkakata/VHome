/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Navbar, Button, Input, InputPassword, KeyboardScroll, Checkbox, ButtonLabel } from '../../components';
import { global } from '../../configs/global';
import * as common from '../../configs/common';
import langs from '../../languages/common';

class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      registerInfo: {
        phonenumber: '',
        user: '',
        pass: '',
        retypePass: '',
        giftCode: '',
        policy: false
      }
    }
  }

  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

  render() {
    const { registerInfo } = this.state;

    return (
      <View style={styles.container}>
        <Navbar
          title={langs.register}
          leftIcon
          back
        />
        <KeyboardScroll contentContainerStyle={styles.viewContent}>
          <View style={styles.viewInput}>
            <Input
              placeholder={langs.phonenumber}
              rounded
              keyboardType='numeric'
              borderWidth={0.7}
              style={[styles.inputStyle]}
              leftIcon
              leftIconName='call'
              textInputRef="user"
              ref="user"
              onSubmitEditing={() => this.focusNextField("fullname")}
              maxLength={15}
              value={registerInfo.phonenumber}
              onChangeText={this.onChangePhonenumber}
            />
            <Input
              placeholder={langs.fullname}
              rounded
              borderWidth={0.7}
              style={styles.inputStyle}
              leftIcon
              leftIconName='account-circle'
              textInputRef="fullname"
              ref="fullname"
              onSubmitEditing={() => this.focusNextField("pass")}
              maxLength={50}
              value={registerInfo.user}
              onChangeText={this.onChangeUsername}
            />
            <InputPassword
              placeholder={langs.newPassword}
              rounded
              borderWidth={0.7}
              style={styles.inputStyle}
              leftIcon
              textInputRef="pass"
              ref="pass"
              onSubmitEditing={() => this.focusNextField("rePass")}
              maxLength={32}
              value={registerInfo.pass}
              onChangeText={this.onChangeTextPassword}
            />
            <InputPassword
              placeholder={langs.retypePassword}
              rounded
              borderWidth={0.7}
              style={styles.inputStyle}
              leftIcon
              textInputRef="rePass"
              ref="rePass"
              onSubmitEditing={() => this.focusNextField("giftCode")}
              maxLength={32}
              value={registerInfo.retypePass}
              onChangeText={this.onRetypePassword}
            />
            <Input
              placeholder={langs.giftCode}
              rounded
              borderWidth={0.7}
              style={styles.inputStyle}
              leftIcon
              leftIconName='card-giftcard'
              textInputRef="giftCode"
              ref="giftCode"
              maxLength={15}
              returnKeyType="done"
              value={registerInfo.giftCode}
              onChangeText={this.onChangeGiftCode}
            />
          </View>
          <View style={styles.viewBottom}>
            <View style={styles.viewCheckbox}>
              <Checkbox
                title={langs.policyTerms}
                style={{ width: 270 }}
                isCheck={registerInfo.policy}
                onChange={this.onChangePolicy}
              />
            </View>
            <Button
              title={langs.register}
              rounded
              width={140}
              style={styles.buttonRegister}
              onPress={this.handRegister}
            />
            <ButtonLabel
              title={langs.backToLogin}
              firstTitle={langs.haveAccount}
              onPress={this.handBackToLogin}
            />
          </View>
        </KeyboardScroll>
      </View>
    );
  }

  onChangePhonenumber = (phonenumber) => {
    this.setState({ registerInfo: { ...this.state.registerInfo, phonenumber } })
  }

  onChangeUsername = (user) => {
    this.setState({ registerInfo: { ...this.state.registerInfo, user } })
  }

  onChangeTextPassword = (pass) => {
    this.setState({ registerInfo: { ...this.state.registerInfo, pass } })
  }

  onRetypePassword = (retypePass) => {
    this.setState({ registerInfo: { ...this.state.registerInfo, retypePass } })
  }

  onChangeGiftCode = (giftCode) => {
    this.setState({ registerInfo: { ...this.state.registerInfo, giftCode } })
  }

  onChangePolicy = ({ checked }) => {
    this.setState({ registerInfo: { ...this.state.registerInfo, policy: checked } })
  }

  handRegister = () => {
    const { registerInfo } = this.state;

    if (registerInfo.phonenumber.trim().length == 0) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorPhonenumberIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }

    if (registerInfo.user.trim().length == 0) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorUsernameIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }

    if (registerInfo.pass.trim().length == 0) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorPassIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }

    if (registerInfo.retypePass.trim().length == 0) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorRetypePassIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }

    if (registerInfo.pass !== registerInfo.retypePass) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorRetypePasswordWrong,
        leftButton: { text: langs.ok }
      })
      return;
    }

    if (!registerInfo.policy) {
      global.Alert.alert({
        title: langs.notifycation,
        message: langs.errorPolicy,
        leftButton: { text: langs.ok }
      })
      return;
    }

    // Request server to register
  }

  handBackToLogin = () => {
    Actions.pop()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR,
  },
  viewContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  },
  inputStyle: {
    marginBottom: 16
  },
  viewBottom: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20
  },
  viewCheckbox: {
    flex: 1
  },
  buttonRegister: {
    marginBottom: 12
  }
});

export default Register;
