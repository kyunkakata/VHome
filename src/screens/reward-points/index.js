/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar, CardRewardPoints } from '../../components';
import * as common from '../../configs/common';
import langs from '../../languages/common';

const DATA = [
  { title: 200, content: 'Giảm 100k với hoá đơn 500kk khi sử dụng dịch vụ vệ sinh nhà ở' },
  { title: 300, content: 'Giảm 100k với hoá đơn 500kk khi sử dụng dịch vụ vệ sinh nhà ở' },
  { title: 400, content: 'Giảm 100k với hoá đơn 500kk khi sử dụng dịch vụ vệ sinh nhà ở' },
  { title: 500, content: 'Giảm 100k với hoá đơn 500kk khi sử dụng dịch vụ vệ sinh nhà ở' },
  { title: 700, content: 'Giảm 100k với hoá đơn 500kk khi sử dụng dịch vụ vệ sinh nhà ở' },
  { title: 1000, content: 'Giảm 100k với hoá đơn 500kk khi sử dụng dịch vụ vệ sinh nhà ở' },
]

class RewardPoints extends PureComponent {
  renderItem = ({ item, index }) => {
    return (
      <CardRewardPoints
        title={`${item.title} ${langs.point}`}
        content={item.content}
        titleFooter={langs.redeemReward}
        style={{ marginBottom: 16, marginRight: index % 2 == 0 ? 16 : 0 }}
        showFooterButton={item.title < 400}
        onPressButtonFooter={this.onRedeemReward}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar
          title={langs.rewardPoints}
          leftIcon
          back
        />
        <View style={styles.viewContent}>
          <FlatList
            data={DATA}
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
            renderItem={this.renderItem}
            contentContainerStyle={styles.viewFlatlist}
          />
        </View>
      </View>
    );
  }

  onRedeemReward = () => {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR
  },
  viewContent: {
    flex: 1
  },
  viewFlatlist: {
    paddingHorizontal: 16,
    paddingTop: 16
  }
});

export default RewardPoints;
