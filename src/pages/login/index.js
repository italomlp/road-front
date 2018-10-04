import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { RView, RInput, RButton } from 'components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as AuthActions } from 'store/ducks/auth';

import logo from 'assets/logo.png';

import styles from './styles';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  login = () => {
    const { email, password } = this.state;
    if (email.length && password.length) {
      this.props.loginRequest(email, password);
    }
  };

  render() {
    return (
      <RView>
        <ScrollView>
          <Image style={styles.logo} source={logo} />
          <View style={styles.formContainer}>
            <RInput
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
              onSubmitEditing={() => this.passwordInput && this.passwordInput.focus()}
              value={this.state.email}
              blurOnSubmit={false}
            />
            <RInput
              inputRef={(ref) => {
                this.passwordInput = ref;
              }}
              placeholder="Senha"
              onChangeText={password => this.setState({ password })}
              onSubmitEditing={this.login}
              value={this.state.password}
              secureTextEntry
            />
            <RButton onPress={this.login} style={styles.loginButton}>
              Entrar
            </RButton>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.footerLine}>
              <Text style={styles.footerText}>Não é cadastrado? </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={[styles.footerText, styles.bold]}>Criar conta.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerLine}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={[styles.footerText, styles.bold]}>Esqueci a senha!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </RView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
