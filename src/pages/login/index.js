import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  Input, Form, Item, Label, Button, Text, Container, Spinner,
} from 'native-base';

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
    loading: PropTypes.bool.isRequired,
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
      <Container>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
          <Form style={styles.formContainer}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                returnKeyType="next"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => this.passwordInput && this.passwordInput.focus()}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel>
              <Label>Senha</Label>
              <Input
                getRef={(ref) => {
                  this.passwordInput = ref._root;
                }}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                onSubmitEditing={this.login}
                value={this.state.password}
                secureTextEntry
              />
            </Item>
          </Form>
          <View style={styles.formActions}>
            <Button primary small onPress={this.login} style={styles.loginButton}>
              { this.props.loading
                ? (
                  <Spinner size="small" color="black" />
                ) : (
                  <Text>Login</Text>
                )
              }
            </Button>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.footerLine}>
              <Text style={styles.footerText}>Não é cadastrado? </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={[styles.footerText, styles.bold]}>Criar conta.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerLine}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LostPassword')}>
                <Text style={[styles.footerText, styles.bold]}>Esqueci a senha!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
