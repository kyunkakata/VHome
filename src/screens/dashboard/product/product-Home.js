/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as common from '../../../configs/common';

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.BACKGROUND_COLOR
  }
});

export default Home;
