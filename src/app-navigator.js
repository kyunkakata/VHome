/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { Scene, Router, Tabs, Stack } from 'react-native-router-flux';
import { transitionConfig, getSceneStyle } from './common/transitionConfig';

//import scene here
import SelectTypeLogin from './containers/select-type-login';
import Login from './containers/login';
import Register from './containers/register';
import ForgotPassword from './containers/forgot-password';

class AppNavigator extends PureComponent {
  render() {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Stack key='root' gesturesEnabled={true} transitionConfig={transitionConfig} >
          <Scene
            key='selectTypeLogin'
            component={SelectTypeLogin}
            swipeEnabled={false}
            panHandlers={null}
            hideNavBar
          />
          <Scene
            key='login'
            component={Login}
            hideNavBar
          />
          <Scene
            key='register'
            component={Register}
            hideNavBar
          />
          <Scene
            key='forgotPassword'
            component={ForgotPassword}
            hideNavBar
          />
        </Stack>
      </Router>
    );
  }
}

export default AppNavigator;
