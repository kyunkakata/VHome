/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Navbar, CardService, Search } from '../../../components';
import MapComponent from '../component/MapComponent';
import * as common from '../../../configs/common';
import * as imgs from '../../../configs/imgs';
import { service } from '../../../api/dataService';
import langs from '../../../languages/common';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false
    }

    this.mapView = React.createRef();
  }

  renderItem = ({ item, index }) => {
    return (
      <CardService
        image={item.image}
        title={item.name}
        style={[styles.card, index % 2 == 0 ? { marginRight: 16 } : undefined]}
      />
    )
  }

  render() {
    const renderSearch = (
      <Search
        onTitle
        placeholder={langs.searchService}
      // style={{ marginBottom: 8 }}
      />
    )

    return (
      <View style={styles.container}>
        <Navbar
          leftIcon
          leftIconName='menu'
          onLeft={this.onPressMoreMenu}
          rightIcon
          rightIconName='place'
          onRight={this.onOpenMap}
          middleComponent={renderSearch}
        />
        <View style={styles.viewContent}>
          <FlatList
            data={service}
            keyExtractor={(item, index) => String(index)}
            numColumns={2}
            contentContainerStyle={styles.viewFlatlist}
            renderItem={this.renderItem}
          />
          <MapComponent ref={this.mapView} />
        </View>
      </View>
    );
  }

  onPressMoreMenu = () => {
    Actions.drawerOpen()
  }

  onOpenMap = () => {
    this.setState(prewState => {
      const newState = !prewState.showMap

      if (newState) {
        this.mapView.current.show()
      } else {
        this.mapView.current.hide()
      }

      return { showMap: newState }
    })
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
    paddingVertical: 22,
    paddingHorizontal: 8,
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 16
  }
});

export default Home;
