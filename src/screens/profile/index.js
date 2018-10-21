/**
* Created by nghinv on Sun Oct 21 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import localization from 'moment/locale/vi';
import {
  Button, ButtonLabel, Input, Avatar, Navbar, ButtonIcon,
  Row, ButtonLabelBorder, KeyboardScroll, ActionSheet
} from '../../components';
import * as common from '../../configs/common';
import langs from '../../languages/common';

const SCREEN = Dimensions.get('window');

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Lưu Thị Hà',
        birthday: '1994-01-15',
        gender: 2,
        phone: '01636014519',
        address: 'Số 2 Lê Văn Thiêm',
        avatar: null
      }
    }

    this.actionsheet = React.createRef()
  }

  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

  render() {
    const { userInfo } = this.state;
    const avatar = userInfo.avatar;
    let dateBirthday = langs.unknow
    if (userInfo.birthday) {
      let arr = userInfo.birthday.split('-')
      dateBirthday = `${arr[2]}-${arr[1]}-${arr[0]}`
    }

    // Pass props to here
    const name = 'HN'

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Navbar
            title={langs.userInfo}
            leftIcon
            back
          />
          <View style={styles.avatar}>
            <View style={{ marginBottom: 12 }}>
              <Avatar
                name={!avatar ? name.slice(0, 2).toUpperCase() : undefined}
                imageSource={avatar && avatar.sourceURL ? avatar.sourceURL : avatar}
                cacheImage={avatar && !avatar.sourceURL}
                onPress={this.addAvatar}
              />
              <ButtonIcon
                iconName='camera-alt'
                iconColor={common.ICON_COLOR_WHITE}
                size={16}
                style={styles.viewTakePhoto}
                backgroundColor={common.AVATAR_BACKGROUND_COLOR}
              />
            </View>
          </View>
        </View>
        <KeyboardScroll contentContainerStyle={styles.viewContent}>
          <Input
            placeholder={langs.fullname}
            rounded
            borderWidth={0.7}
            style={styles.inputStyle}
            leftIcon
            leftIconName='account-circle'
            textInputRef="fullname"
            ref="fullname"
            onSubmitEditing={() => this.focusNextField("phone")}
            maxLength={50}
            value={userInfo.name}
            onChangeText={this.onChangeUsername}
          />
          <DatePicker
            showIcon={false}
            style={styles.viewCalendar}
            date={dateBirthday ? dateBirthday : moment().locale('vi', localization).format('DD-MM-YYYY')}
            mode="date"
            placeholder={langs.selectDate}
            format="DD-MM-YYYY"
            minDate="01-01-1900"
            maxDate="01-01-2050"
            confirmBtnText={langs.confirm}
            cancelBtnText={langs.cancel}
            locale={this.props.language}
            leftIconName='cake'
            leftIconColor={common.ICON_COLOR_ACTIVE}
            customStyles={{
              dateInput: {
                borderWidth: 0,
                alignItems: 'flex-start',
                marginLeft: 8,
                marginTop: 4
              },
              dateText: {
                fontSize: common.FONT_SIZE_TITLE,
                color: common.TEXT_COLOR_BLACK,
              },
              btnTextCancel: {
                position: 'absolute',
                color: common.TEXT_COLOR_BLACK,
                left: 12
              },
              btnTextConfirm: {
                position: 'absolute',
                right: 12,
                color: common.TEXT_COLOR_ACTIVE
              }
            }}
            onDateChange={this.handleSelectDay.bind(this)}
          />
          <Row
            leftIconName='accessibility'
            leftTitle={userInfo.gender == 2 ? langs.female : langs.male}
            rightIconName='arrow-drop-down'
            rightIconColor={common.ICON_COLOR_BLACK}
            style={styles.rowButton}
            onPress={this.onPressGender}
          />
          <Input
            placeholder={langs.phonenumber}
            rounded
            keyboardType='numeric'
            borderWidth={0.7}
            style={[styles.inputStyle]}
            leftIcon
            leftIconName='call'
            textInputRef="phone"
            ref="phone"
            maxLength={15}
            value={userInfo.phone}
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
            value={userInfo.address}
            onChangeText={this.onChangeAddress}
          />
          <Button
            title={langs.updateInfo}
            rounded
            width={160}
            style={styles.buttonStyle}
            titleStyle={styles.titleButtonStyle}
            onPress={this.handUpdateUserInfo}
          />
          <ButtonLabel
            title={langs.changePassword}
            onPress={this.handChangePassword}
            titleStyle={styles.titleButtonStyle}
          />
          <ButtonLabelBorder
            title={langs.syncFacebook}
            rounded
            width={Math.min(270, SCREEN.width - 24)}
            style={{ marginTop: 8 }}
            onPress={this.handSyncFacebook}
          />
        </KeyboardScroll>
        <ActionSheet
          ref={this.actionsheet}
          bottomTitle={langs.cancel}
          options={[
            { title: langs.male, onPress: this.onChooseMale },
            { title: langs.female, onPress: this.onChooseFemale }
          ]}
        />
        <ActionSheet
          ref='actionSheetAvatar'
          bottomTitle={langs.cancel}
          options={[
            { title: langs.fromLibrary, leftIconName: 'photo', onPress: this.onChooseLibrary },
            { title: langs.camera, leftIconName: 'photo-camera', onPress: this.onTakePhoto }
          ]}
        />
      </View>
    );
  }

  addAvatar = () => {
    if (this.refs.actionSheetAvatar) {
      this.refs.actionSheetAvatar.show()
    }
  }

  onChooseLibrary = () => {
    ImagePicker.openPicker({
      width: SCREEN.width,
      height: SCREEN.width,
      multiple: false,
      minFiles: 1,
      maxFiles: 1,
      mediaType: 'photo',
      compressImageQuality: 1,
      cropping: true
    }).then(images => {
      console.log(images);
      if (Platform.OS === 'android') {
        images.sourceURL = images.path
        if (!images.filename) {
          images.filename = `${(new Date()).getTime()}.JPG`
        }
        if (!images.mime) {
          images.mime = 'image/jpeg'
        }
      } else {
        images.sourceURL = images.path
        if (!images.filename) {
          images.filename = `${(new Date()).getTime()}.JPG`
        }
        if (!images.mime) {
          images.mime = 'image/jpeg'
        }
      }

      this.setState({
        userInfo: {
          ...this.state.userInfo,
          avatar: images
        }
      })
    }).catch(e => console.log(e));
  }

  onTakePhoto = () => {
    ImagePicker.openCamera({
      width: SCREEN.width,
      height: SCREEN.width,
      cropping: true
    }).then(image => {
      console.log(image);
      if (Platform.OS === 'android') {
        image.sourceURL = image.path
        if (!image.filename) {
          image.filename = `${(new Date()).getTime()}.JPG`
        }
        if (!image.mime) {
          image.mime = 'image/jpeg'
        }
      } else {
        image.sourceURL = image.path
        if (!image.filename) {
          image.filename = `${(new Date()).getTime()}.JPG`
        }
        if (!image.mime) {
          image.mime = 'image/jpeg'
        }
      }

      this.setState({
        userInfo: {
          ...this.state.userInfo,
          avatar: image
        }
      })
    }).catch(e => console.log(e));
  }

  onChangeUsername = (name) => {
    this.setState({ userInfo: { ...this.state.userInfo, name } })
  }

  onChangePhonenumber = (phone) => {
    this.setState({ userInfo: { ...this.state.userInfo, phone } })
  }

  onChangeAddress = (address) => {
    this.setState({ userInfo: { ...this.state.userInfo, address } })
  }

  handleSelectDay(date) {
    let arr = date.split('-')
    let dateBirthday = `${arr[2]}-${arr[1]}-${arr[0]}`
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        birthday: dateBirthday
      }
    })
  }

  onPressGender = () => {
    this.actionsheet.current.show()
  }

  onChooseMale = () => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        gender: 1
      }
    })
  }

  onChooseFemale = () => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        gender: 2
      }
    })
  }

  handUpdateUserInfo = () => {
    const { userInfo } = this.state;

    if (userInfo.name.trim().length == 0) {
      window.customAlert.alert({
        title: langs.notifycation,
        message: langs.errorUsernameIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }

    if (userInfo.phone.trim().length == 0) {
      window.customAlert.alert({
        title: langs.notifycation,
        message: langs.errorPhonenumberIsNull,
        leftButton: { text: langs.ok }
      })
      return;
    }


  }

  handChangePassword = () => {

  }

  handSyncFacebook = () => {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR
  },
  navbar: {
    height: 146,
    backgroundColor: common.BACKGROUND_COLOR_NAV
  },
  avatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTakePhoto: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewContent: {
    alignItems: 'center',
    paddingVertical: 20
  },
  inputStyle: {
    marginBottom: 16
  },
  rowButton: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: common.INPUT_BORDER_COLOR,
    height: 44,
    width: Math.min(270, SCREEN.width - 24),
    borderRadius: 22,
    marginBottom: 16
  },
  buttonStyle: {
    marginBottom: 8
  },
  titleButtonStyle: {
    fontSize: common.FONT_SIZE_CONTENT
  },
  viewCalendar: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: common.INPUT_BORDER_COLOR,
    height: 44,
    width: Math.min(270, SCREEN.width - 24),
    borderRadius: 22,
    marginBottom: 16
  }
});

export default Profile;
