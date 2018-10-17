/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

'use strick';

import React from 'react';
import { StyleSheet, Text, Platform, Linking, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const WWW_URL_PATTERN = /^www\./i;

/*
* function detected device is iphoneX
* return true when device is iphoneX
*/
export const isX = (() => {
  return (
    Platform.OS === 'ios' && DeviceInfo.getModel() === 'iPhone X'
  );
})();

export const safeAreaInsetX = { top: 24, bottom: 34 };
export const paddingX = isX ? safeAreaInsetX.top : 0;

//iPhoneX SafeArea
export const safeArea = {
  portrait: {
    topInset: 24,
    leftInset: 0,
    rightInset: 0,
    bottomInset: 34
  },
  landscape: {
    topInset: 0,
    leftInset: 44,
    rightInset: 44,
    bottomInset: 21
  }
}

// The height of the navigation bar itself
export const navigationBarHeight = 44;
export const statusBarHeight = Platform.select({ ios: 20, android: StatusBar.currentHeight });
export const heightNavBar = navigationBarHeight + Platform.select({ ios: statusBarHeight + paddingX, android: 0 });

/***
* Function set font default
* @param font like: 'Quicksand'
* @requires font link to ios and android
*/
export const setFont = (font) => {
  const styles = StyleSheet.create({
    defaultFontFamily: {
      fontFamily: font
    }
  });

  const oldRender = Text.render;
  Text.render = function (...args) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultFontFamily, origin.props.style]
    });
  };
}

/*
* Function open url on web brower
*/
export const openUrl = (url) => {
  try {
    if (WWW_URL_PATTERN.test(url)) {
      this.onUrlPress(`http://${url}`);
    } else {
      Linking.canOpenURL(url).then((supported) => {
        if (!supported) {
          console.log('No handler for URL:', url);
        } else {
          Linking.openURL(url)
            .catch(e => {
              console.log('error', e)
            })
        }
      });
    }
  } catch (e) { }
}