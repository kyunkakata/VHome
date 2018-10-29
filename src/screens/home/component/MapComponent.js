/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated } from 'react-native';
import MapView from 'react-native-maps';
import InteractionManager from '../../../common/interactionManager';
import * as common from '../../../configs/common';

const SCREEN = Dimensions.get('window');
const springConfig = { tension: 30, friction: 7 };

class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      enableRenderMapview: false
    }

    this.anim = new Animated.Value(0)
  }

  componentWillUnmount() {
    this.setState({ enableRenderMapview: false })
  }

  checkNeedRenderMap = () => {
    if (!this.state.enableRenderMapview) {
      InteractionManager.runAfterInteractions(() => {
        this.setState({ enableRenderMapview: true })
      })
    }
  }

  show = () => {
    this.checkNeedRenderMap()
    Animated.spring(this.anim, {
      toValue: 1,
      ...springConfig
    }).start()
  }

  hide = () => {
    Animated.spring(this.anim, {
      toValue: 0,
      ...springConfig
    }).start()
  }

  render() {
    const { enableRenderMapview } = this.state;
    return (
      <Animated.View
        style={[
          styles.container,
          {
            right: 0,
            transform: [
              {
                translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [SCREEN.width, 0]
                })
              }
            ]
          }
        ]}
      >
        {
          enableRenderMapview && (
            <MapView
              style={styles.asolute}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
          )
        }
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: SCREEN.width,
    backgroundColor: common.BACKGROUND_COLOR
  },
  asolute: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default MapComponent;
