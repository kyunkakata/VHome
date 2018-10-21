/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import * as types from '../types';

const initialState = {
  language: 'vi',
  barStyle: 'light-content',
  notify: true,
  vibrate: true,
  firstInstall: true,
  autoLogin: true,
  isUser: true,
  user: {
    username: '',
    phonenumber: '',
    password: ''
  },
  token: undefined
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    case types.CHANGE_TYPE_LOGIN:
      return {
        ...state,
        isUser: action.payload
      }
    default:
      return state
  }
}
