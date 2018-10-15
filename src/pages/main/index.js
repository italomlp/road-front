import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import PropTypes from 'prop-types';

import { Button, Text, Container } from 'native-base';
import styles from './styles';

const Main = ({ logoutRequest }) => (
  <Container>
    <Text style={styles.title}>Tela principal</Text>
    <Button onPress={logoutRequest}>
      <Text>Sair</Text>
    </Button>
  </Container>
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
