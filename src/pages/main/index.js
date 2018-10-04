import React from 'react';

import { Text } from 'react-native';

import { RView, RButton } from 'components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import PropTypes from 'prop-types';

import styles from './styles';

const Main = ({ logoutRequest }) => (
  <RView>
    <Text style={styles.title}>Tela principal</Text>
    <RButton onPress={logoutRequest}>Logout</RButton>
  </RView>
);

Main.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Main);
