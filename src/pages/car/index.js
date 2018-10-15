import React, { Component } from 'react';

import { View } from 'react-native';

import {} from 'native-base';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import styles from './styles';

class Car extends Component {
  state = {};

  render() {
    return <View />;
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(Car);
// mapStateToProps,
// mapDispatchToProps
