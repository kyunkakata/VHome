/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

'use strick';

import { all, fork } from 'redux-saga/effects';
import * as configs from './config';

export default function* rootSaga() {
  yield all([
    ...Object.values(configs),
  ].map(fork));
}
