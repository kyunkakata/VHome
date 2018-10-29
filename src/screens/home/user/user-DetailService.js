/**
* Created by nghinv on Tue Oct 23 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';
import { Navbar, CardService, Button } from '../../../components';
import { global } from '../../../configs/global';
import * as common from '../../../configs/common';
import langs from '../../../languages/common';
import CardCallService from '../component/CardCallService';

const ButtonAnimated = createAnimatableComponent(Button);

class DetailService extends PureComponent {
  renderAlertCallService = () => {
    return <CardCallService widthAlert={global.width - 32} />
  }

  render() {
    const { service } = this.props;
    // let service = {
    //   name: 'test',
    //   image: null
    // }

    return (
      <View style={styles.container}>
        <Navbar
          title={service.name}
          leftIcon
          back
        />
        <ScrollView contentContainerStyle={styles.viewContent}>
          <CardService
            image={service.image}
            width='100%'
            height={160}
          />
          <Text style={styles.txtContent}>
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
            Tiếp nhận yêu cầu và phục vụ khách hàng liên tục, ngày đêm, bất cứ khi nào khách hàng yêu cầu
          </Text>
        </ScrollView>
        <ButtonAnimated
          title={langs.callService}
          style={styles.viewBtnCallService}
          titleStyle={styles.titleStyle}
          animation='zoomInDown'
          useNativeDriver
          ref={ref => this.refButton = ref}
          rounded
          width={120}
          height={36}
          onPress={this.onCallServer}
        />
      </View>
    );
  }

  onCallServer = () => {
    this.refButton.transitionTo({ opacity: 0, transform: [{ scale: 0 }] })
    global.Alert.alert({
      renderContent: this.renderAlertCallService,
      width: global.width - 32,
      borderRadius: 5,
      onClose: this.onCloseAlert
    })
  }

  onCloseAlert = () => {
    this.refButton.transitionTo({ opacity: 1, transform: [{ scale: 1 }] })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR,
  },
  viewContent: {
    paddingVertical: 16,
    paddingHorizontal: 8
  },
  viewBtnCallService: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 12
  },
  titleStyle: {
    fontSize: 13
  },
  txtContent: {
    marginTop: 12,

  }
});

export default DetailService;
