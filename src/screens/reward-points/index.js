/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Navbar } from '../../components';
import * as common from '../../configs/common';
import langs from '../../languages/common';

class RewardPoints extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          title={langs.rewardPoints}
          leftIcon
          back
        />
        <View style={styles.viewContent}>
          <Text>RewardPoints Component</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR
  },
  viewContent: {
    flex: 1
  }
});

export default RewardPoints;
