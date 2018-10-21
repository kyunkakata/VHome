/**
* Created by nghinv on Sat Oct 20 2018
* Copyright (c) 2018 nghinv@luci.vn
*/

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HomeProductComponent from '../../screens/dashboard/product/product-Home';
import HomeUserComponent from '../../screens/dashboard/user/user-Home';

class Home extends PureComponent {
  render() {
    const { isUser } = this.props;

    return isUser ? <HomeUserComponent {...this.props} /> : <HomeProductComponent {...this.props} />
  }
}

const mapDispathToProps = {

}

const mapStateToProps = (state) => {
  return {
    language: state.config.language,
    isUser: state.config.isUser
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Home);
