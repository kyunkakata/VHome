/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import * as types from '../types';

export const changeTypeLogin = (payload) => {
  return {
    type: types.CHANGE_TYPE_LOGIN,
    payload
  }
}
