/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

'use strick';

import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import Config from './config';

const setupConfig = {
  key: 'configReducer',
  storage: AsyncStorage
}

export default combineReducers({
  config: persistReducer(setupConfig, Config),
});