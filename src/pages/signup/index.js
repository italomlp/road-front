import React, { Component } from 'react';
import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as SignupActions } from 'store/ducks/signup';

import PropTypes from 'prop-types';

import moment from 'moment';

import {
  RView, RButton, RInput, RDatepicker,
} from 'components';

import styles from './styles';

class Signup extends Component {
  static navigationOptions = {
    title: 'Cadastrar',
  };

  static propTypes = {
    signupRequest: PropTypes.func.isRequired,
  };

  state = {
    fullName: '',
    cnhExpiration: {},
    birthDate: {},
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSignup = () => {
    const {
      fullName, cnhExpiration, birthDate, email, password, confirmPassword,
    } = this.state;
    if (
      fullName.length
      && cnhExpiration
      && birthDate
      && email.length
      && password.length
      && password === confirmPassword
    ) {
      this.props.signupRequest(fullName, cnhExpiration, birthDate, email, password);
    }
  };

  handleBack = () => {
    const {
      fullName, cnhExpiration, birthDate, email, password, confirmPassword,
    } = this.state;
    console.tron.log({
      fullName,
      cnhExpiration,
      birthDate,
      email,
      password,
      confirmPassword,
    });
  };

  handleBirthDate = (date) => {
    this.setState({ birthDate: moment(date) });
  };

  handleCNHDate = (date) => {
    this.setState({ cnhExpiration: moment(date) });
  };

  render() {
    return (
      <RView>
        <View style={styles.formContainer}>
          <RInput
            spellCheck
            autoCapitalize="sentences"
            placeholder="Nome Completo"
            onChangeText={fullName => this.setState({ fullName })}
            value={this.state.fullName}
          />
          <RDatepicker
            label="Data de aniversário"
            date={this.state.birthDate}
            handleDate={this.handleBirthDate}
          />
          <RDatepicker
            label="Vencimento CNH"
            date={this.state.cnhExpiration}
            minimumDate={moment()
              .add(1, 'month')
              .toDate()}
            maximumDate={moment()
              .add(8, 'year')
              .toDate()}
            handleDate={this.handleCNHDate}
          />
          <RInput
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => this.passwordInput && this.passwordInput.focus()}
            keyboardType="email-address"
            value={this.state.email}
          />
          <RInput
            inputRef={(ref) => {
              this.passwordInput = ref;
            }}
            placeholder="Senha"
            onChangeText={password => this.setState({ password })}
            onSubmitEditing={() => this.confirmPasswordInput && this.confirmPasswordInput.focus()}
            value={this.state.password}
            secureTextEntry
          />
          <RInput
            inputRef={(ref) => {
              this.confirmPasswordInput = ref;
            }}
            onSubmitEditing={this.handleSignup}
            placeholder="Confirmação de senha"
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
            secureTextEntry
          />
          <RButton onPress={this.handleSignup}>Cadastrar</RButton>
          <RButton onPress={this.handleBack}>Voltar</RButton>
        </View>
      </RView>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Signup);
