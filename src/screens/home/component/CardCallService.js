/**
* Created by nghinv on Tue Oct 23 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { Button, ButtonIcon, Input } from '../../../components';
import { global } from '../../../configs/global';
import * as common from '../../../configs/common';
import langs from '../../../languages/common';

class CardCallService extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    }

    this.animStep = new Animated.Value(0)
  }

  renderStep1 = () => {
    const { widthAlert } = this.props;

    return (
      <Animated.View
        style={[
          styles.containerStep1,
          {
            width: widthAlert,
            left: 0,
            transform: [
              {
                translateX: this.animStep.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -widthAlert]
                })
              }
            ]
          }
        ]}
      >
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>{langs.customerInfo}</Text>
        </View>
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
          // value={registerInfo.user}
          onChangeText={this.onChangeUsername}
        />
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
          // value={registerInfo.phonenumber}
          onChangeText={this.onChangePhonenumber}
        />
        <Input
          placeholder={langs.address}
          rounded
          borderWidth={0.7}
          style={styles.inputStyle}
          leftIcon
          leftIconName='location-on'
          maxLength={50}
          returnKeyType='done'
          // value={userInfo.address}
          onChangeText={this.onChangeAddress}
        />
      </Animated.View>
    )
  }

  renderStep2 = () => {
    const { widthAlert } = this.props;

    return (
      <Animated.View
        style={[
          styles.asolute,
          styles.containerStep1,
          {
            width: widthAlert,
            left: widthAlert,
            transform: [
              {
                translateX: this.animStep.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -widthAlert]
                })
              }
            ]
          }
        ]}
      >
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>{langs.setDateTime}</Text>
        </View>

      </Animated.View>
    )
  }

  renderStep3 = () => {
    const { widthAlert } = this.props;

    return (
      <Animated.View
        style={[
          styles.asolute,
          styles.containerStep1,
          {
            width: widthAlert,
            left: widthAlert,
            transform: [
              {
                translateX: this.animStep.interpolate({
                  inputRange: [1, 2],
                  outputRange: [0, -widthAlert]
                })
              }
            ]
          }
        ]}
      >
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>{langs.yourProblem}</Text>
        </View>

      </Animated.View>
    )
  }

  render() {
    const { currentStep } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Button
            title={langs.stepOne}
            style={[styles.btnStep, currentStep == 1 ? styles.separator : undefined]}
            color={currentStep == 1 ? common.TEXT_COLOR_ACTIVE : undefined}
            backgroundColor={currentStep == 1 ? common.BACKGROUND_COLOR : undefined}
            onPress={() => this.onChangeStep(1)}
          />
          <Button
            title={langs.stepTwo}
            style={[styles.btnStep, currentStep == 2 ? styles.separator : undefined]}
            color={currentStep == 2 ? common.TEXT_COLOR_ACTIVE : undefined}
            backgroundColor={currentStep == 2 ? common.BACKGROUND_COLOR : undefined}
            onPress={() => this.onChangeStep(2)}
          />
          <Button
            title={langs.stepThree}
            style={[styles.btnStep, currentStep == 3 ? styles.separator : undefined]}
            color={currentStep == 3 ? common.TEXT_COLOR_ACTIVE : undefined}
            backgroundColor={currentStep == 3 ? common.BACKGROUND_COLOR : undefined}
            onPress={() => this.onChangeStep(3)}
          />
          <ButtonIcon
            iconName='clear'
            iconColor={common.ICON_COLOR_WHITE}
            backgroundColor={common.BACKGROUND_COLOR_BUTTON}
            size={20}
            style={styles.btnCloseAlert}
            onPress={this.onDismissAlert}
          />
        </View>
        <View style={styles.viewContent}>
          {this.renderStep1()}
          {this.renderStep2()}
          {this.renderStep3()}
        </View>
        <View style={styles.viewFooter}>
          <Button
            title={langs.next}
            style={styles.btnContinute}
            width='100%'
            onPress={this.onNextStep}
          />
        </View>
      </View>
    );
  }

  onDismissAlert = () => {
    global.Alert.close()
  }

  onChangeStep = (step) => {
    this.setState({ currentStep: step })
    Animated.spring(this.animStep, {
      toValue: step - 1,
      tension: 30,
      friction: 7,
      useNativeDriver: true
    }).start()
  }

  onNextStep = () => {
    if (this.state.currentStep < 3) {
      this.setState(prewState => {
        let newStep = prewState.currentStep + 1

        Animated.spring(this.animStep, {
          toValue: newStep - 1,
          tension: 30,
          friction: 7,
          useNativeDriver: true
        }).start()

        return {
          currentStep: newStep
        }
      })
    } else if (this.state.currentStep == 3) {

    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  viewHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewContent: {
    width: '100%'
  },
  containerStep1: {
    alignItems: 'center',
    marginVertical: 4,
    backgroundColor: common.BACKGROUND_COLOR
  },
  btnStep: {
    flex: 1
  },
  separator: {
    borderBottomColor: common.ACTION_SHEET_COLOR_SEPARATOR,
    borderBottomWidth: 0.7
  },
  asolute: {
    ...StyleSheet.absoluteFillObject
  },
  btnContinute: {

  },
  btnCloseAlert: {
    width: 28,
    borderRadius: 0,
    height: 44
  },
  viewTitle: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtTitle: {
    fontSize: common.FONT_SIZE_TITLE,
    fontWeight: common.FONT_WEIGHT_HEADER
  },
  inputStyle: {
    marginBottom: 16
  }
});

export default CardCallService;
