/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, LayoutAnimation, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Avatar, Row, ButtonIcon } from '../../components';
import { CustomLayoutSpring } from '../../common/animation';
import { setLanguage } from '../../redux/actions/config';
import { openUrl } from '../../common/utils';
import * as common from '../../configs/common';
import langs from '../../languages/common';
import { Actions } from 'react-native-router-flux';

const SCREEN = Dimensions.get('window');
const POLICY_URL = 'https://google.com';
const POLICY_WEB = 'www.v-home.com/chinhsach';
const HOTLINE = '0123456789';
const HOTLINE_CALL = '+84123456789';

class DrawerMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      setLanguage: false
    }
  }

  renderAlertContent = () => {
    return (
      <View style={styles.viewContainerAlert}>
        <Text style={styles.titleNotifi}>{langs.viewPolicy}</Text>
        <Text style={styles.messageNotifi}>{POLICY_WEB}</Text>
      </View>
    )
  }

  renderAlertVHomeIntro = () => {
    return (
      <View style={styles.containerIntro}>
        <View style={styles.viewHeaderIntro}>
          <View style={{ width: 36 }} />
          <Text style={styles.txtHeaderIntro}>
            {langs.vhomeIntro}
          </Text>
          <ButtonIcon
            iconName='clear'
            iconColor={common.ICON_COLOR_ACTIVE}
            onPress={this.onDismissAlert}
          />
        </View>
        <View style={styles.viewContentIntro}>
          <Text style={styles.titleIntro}>
            {langs.titleIntro}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const { setLanguage } = this.state;
    const { language } = this.props;

    const name = 'Luu Ha'
    const avatar = null
    const rewardPoints = 111000

    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Avatar
            name={!avatar ? name.slice(0, 2).toUpperCase() : undefined}
            imageSource={avatar}
            onPress={this.onProfile}
          />
          <Text style={styles.username}>{name}</Text>
          <TouchableOpacity onPress={this.onPressRewardPoints} style={styles.viewFooterNav}>
            <Icon name='card-giftcard' size={20} color={common.BACKGROUND_COLOR_BUTTON} />
            <View style={styles.viewRewardPoints}>
              <Text style={styles.txtRewardPoints}>{rewardPoints}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.viewContent}>
          <Row
            leftTitle={langs.notifycation}
            leftIconName='notifications-none'
            rightIconName='chevron-right'
            width='100%'
            separator
            onPress={this.onOpenNotification}
          />
          <Row
            leftTitle={langs.history}
            leftIconName='history'
            rightIconName='chevron-right'
            width='100%'
            separator
            onPress={this.onHistory}
          />
          <Row
            leftTitle={langs.rewardPoints}
            leftIconName='card-giftcard'
            rightIconName='chevron-right'
            width='100%'
            separator
            onPress={this.rewardPoints}
          />
          <Row
            leftTitle={langs.policyTerms}
            leftIconName='check'
            width='100%'
            separator
            onPress={this.onPolicyTerms}
          />
          <Row
            leftTitle={langs.vhomeIntro}
            leftIconName='group-work'
            width='100%'
            separator
            onPress={this.onVHomeIntro}
          />
          <Row
            leftTitle={`${langs.hotline} ${HOTLINE}`}
            leftIconName='call'
            width='100%'
            separator
            onPress={this.onCallHotline}
          />
          <Row
            leftTitle={langs.language}
            leftIconName='language'
            rightIconName={setLanguage ? 'expand-more' : 'chevron-right'}
            width='100%'
            separator
            onPress={this.onSettingLanguage}
          />
          {
            setLanguage && (
              <Row
                leftTitle={langs.vietnamese}
                rightIconName={language == 'vi' ? 'check' : undefined}
                width='100%'
                separator
                onPress={() => this.onChangeLanguage('vi')}
              />
            )
          }
          {
            setLanguage && (
              <Row
                leftTitle={langs.english}
                rightIconName={language == 'en' ? 'check' : undefined}
                width='100%'
                separator
                onPress={() => this.onChangeLanguage('en')}
              />
            )
          }
          <Row
            leftTitle={langs.logout}
            leftIconName='power-settings-new'
            width='100%'
            separator
            onPress={this.onLogout}
          />
        </ScrollView>
      </View>
    );
  }

  onProfile = () => {
    Actions.profile()
  }

  onPressRewardPoints = () => {
    Actions.rewardPoints()
  }

  onOpenNotification = () => {
    Actions.inbox()
  }

  onHistory = () => {
    Actions.history()
  }

  rewardPoints = () => {
    Actions.rewardPoints()
  }

  onPolicyTerms = () => {
    window.customAlert.alert({
      renderContent: this.renderAlertContent,
      leftButton: {
        text: langs.continute,
        textStyle: { color: common.TEXT_COLOR_BLACK },
        onPress: this.onOpenPolicyTerms
      },
      rightButton: {
        text: langs.cancel
      }
    })
  }

  onOpenPolicyTerms = () => {
    openUrl(POLICY_URL)
  }

  onVHomeIntro = () => {
    window.customAlert.alert({
      renderContent: this.renderAlertVHomeIntro,
      width: SCREEN.width - 32
    })
  }

  onDismissAlert = () => {
    window.customAlert.close()
  }

  onCallHotline = () => {
    Communications.phonecall(HOTLINE_CALL, true);
  }

  onSettingLanguage = () => {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    this.setState({ setLanguage: !this.state.setLanguage })
  }

  onChangeLanguage = (language) => {
    this.props.setLanguage(language)
  }

  onLogout = () => {
    Actions.popTo('start')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR
  },
  viewHeader: {
    height: 146,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: common.BACKGROUND_COLOR_NAV
  },
  viewFooterNav: {
    flexDirection: 'row',
    backgroundColor: common.BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 8,
    marginTop: 8,
    marginBottom: 8
  },
  viewRewardPoints: {
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 4,
    marginLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: common.BACKGROUND_COLOR_BUTTON,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtRewardPoints: {
    color: common.TEXT_COLOR_ACTIVE,
    fontSize: common.FONT_SIZE_SMALL,
    fontWeight: common.FONT_WEIGHT_TITLE,
  },
  username: {
    color: common.TEXT_COLOR_WHITE,
    fontSize: common.FONT_SIZE_TITLE,
    fontWeight: common.FONT_WEIGHT_HEADER,
    marginTop: 2
  },
  viewContent: {

  },
  viewContainerAlert: {
    paddingHorizontal: 8,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleNotifi: {
    textAlign: 'center',
    color: common.TEXT_COLOR_BLACK,
    fontSize: common.FONT_SIZE_TITLE
  },
  messageNotifi: {
    textAlign: 'center',
    color: 'blue',
    fontSize: common.FONT_SIZE_TITLE
  },
  containerIntro: {
    paddingBottom: 16,
    width: SCREEN.width - 32
  },
  viewHeaderIntro: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: common.ALERT_COLOR_SEPARATOR,
    marginBottom: 16,
    flexDirection: 'row'
  },
  txtHeaderIntro: {
    color: common.TEXT_COLOR_ACTIVE,
    fontSize: common.FONT_SIZE_TITLE,
    fontWeight: common.FONT_WEIGHT_TITLE
  },
  titleIntro: {
    color: common.TEXT_COLOR_BLACK,
    fontSize: 15,
    fontWeight: common.FONT_WEIGHT_TITLE,
    marginHorizontal: 16
  }
});

const mapStateToProps = (state) => {
  return {
    language: state.config.language,
    isUser: state.config.isUser
  }
}

const mapDispathToProps = {
  setLanguage
}

export default connect(mapStateToProps, mapDispathToProps)(DrawerMenu);
