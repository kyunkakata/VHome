/**
* Created by nghinv on Tue Oct 16 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { Scene, Router, Tabs, Stack, Drawer } from 'react-native-router-flux';
import { transitionConfig, getSceneStyle } from './common/transitionConfig';

//import scene here
import Start from './containers/start';
import Login from './containers/login';
import Register from './containers/register';
import ForgotPassword from './containers/forgot-password';
import DrawerMenu from './screens/dashboard/DrawerMenu';
import Home from './containers/home';
import RewardPoints from './containers/reward-points';
import History from './containers/history';
import Inbox from './containers/inbox';
import Profile from './containers/profile';

class AppNavigator extends PureComponent {
  render() {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Stack key='root' gesturesEnabled={true} transitionConfig={transitionConfig} >
          <Scene
            key='start'
            component={Start}
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
          <Drawer
            hideNavBar
            key="drawer"
            panHandlers={null}
            contentComponent={DrawerMenu}
            drawerWidth={300}
          // initial
          >
            <Scene key='dashboard' hideNavBar panHandlers={null}>
              <Scene
                key='home'
                component={Home}
                hideNavBar
              />
              <Scene
                key='rewardPoints'
                component={RewardPoints}
                hideNavBar
                panHandlers
                navigationOptions={({ navigation }) => ({
                  drawerLockMode: "locked-closed",
                })}
              />
              <Scene
                key='history'
                component={History}
                hideNavBar
                panHandlers
              />
              <Scene
                key='inbox'
                component={Inbox}
                hideNavBar
                panHandlers
              />
              <Scene
                key='profile'
                component={Profile}
                hideNavBar
                panHandlers
              />
            </Scene>
          </Drawer>
        </Stack>
      </Router>
    );
  }
}

export default AppNavigator;
