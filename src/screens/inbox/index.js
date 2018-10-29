/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Navbar } from '../../components';
import RowInboxUser from './RowInboxUser';
import * as common from '../../configs/common';
import langs from '../../languages/common';

const data = [
  { title: 'Điểm thưởng V-Home', content: 'Bạn vừa được tặng thêm 50 điểm từ V-Home, điểm thưởng được tích luỹ trong phần điểm', time: 1540125596968 },
  { title: 'Gọi dịch vụ thành công', content: 'Nguyễn Tuấn Anh đã nhận dịch vụ thuê máy móc của bạn', time: 1540125596968 },
  { title: 'Điểm thưởng V-Home', content: 'Bạn vừa được tặng thêm 50 điểm từ V-Home, điểm thưởng được tích luỹ trong phần điểm', time: 1540125596968 },
  { title: 'Điểm thưởng V-Home', content: 'Bạn vừa được tặng thêm 50 điểm từ V-Home, điểm thưởng được tích luỹ trong phần điểm', time: 1540125596968 },
  { title: 'Điểm thưởng V-Home', content: 'Bạn vừa được tặng thêm 50 điểm từ V-Home, điểm thưởng được tích luỹ trong phần điểm', time: 1540125596968 },
  { title: 'Điểm thưởng V-Home', content: 'Bạn vừa được tặng thêm 50 điểm từ V-Home, điểm thưởng được tích luỹ trong phần điểm', time: 1540125596968 },
  { title: 'Điểm thưởng V-Home', content: 'Bạn vừa được tặng thêm 50 điểm từ V-Home, điểm thưởng được tích luỹ trong phần điểm', time: 1540125596968 },
]

class Inbox extends PureComponent {
  renderItem = ({ item, index }) => {
    return (
      <RowInboxUser item={item} language={this.props.language} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar
          title={langs.inbox}
          leftIcon
          back
        />
        <View style={styles.viewContent}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => String(index)}
            renderItem={this.renderItem}
            contentContainerStyle={styles.viewFlatlist}
          />
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
  },
  viewFlatlist: {
    paddingBottom: 20
  }
});

export default Inbox;
