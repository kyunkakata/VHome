/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import LocalizedStrings from 'react-native-localization';
import * as types from '../types';
import Langs from '../../languages';

export const setLanguage = (lang) => {
  for (let i = 0; i < Langs.length; i++) {
    Langs[i].default.setLanguage(lang)
  }

  return {
    type: types.SET_LANGUAGE,
    payload: lang
  }
}
