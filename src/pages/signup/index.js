import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as SignupActions } from 'store/ducks/signup';
import {
  Content,
  Form,
  Input,
  Item,
  Button,
  Label,
  Text,
  Header,
  Body,
  Left,
  Icon,
  Right,
  Container,
  Title,
} from 'native-base';
import PropTypes from 'prop-types';
import moment from 'moment';
import { RDatepicker } from 'components';

import styles from './styles';

class Signup extends Component {
  static navigationOptions = {
    title: 'Cadastrar',
  };

  static propTypes = {
    signupRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    fullName: '',
    cnhExpiration: {},
    birthDate: new Date(),
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
    this.props.navigation.goBack();
  };

  handleBirthDate = (date) => {
    this.setState({ birthDate: moment(date) });
  };

  handleCNHDate = (date) => {
    this.setState({ cnhExpiration: moment(date) });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent rounded onPress={this.handleBack}>
              <Icon ios="ios-arrow-back" android="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Cadastrar</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form style={styles.formContainer}>
            <Item floatingLabel>
              <Label>Nome completo</Label>
              <Input
                spellCheck
                autoCapitalize="sentences"
                onChangeText={fullName => this.setState({ fullName })}
                value={this.state.fullName}
              />
            </Item>
            <RDatepicker
              label="Data de aniversário"
              date={this.state.birthDate}
              maximumDate={moment()
                .subtract(18, 'year')
                .toDate()}
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
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => this.passwordInput && this.passwordInput._root.focus()}
                keyboardType="email-address"
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel>
              <Label>Senha</Label>
              <Input
                getRef={(ref) => {
                  this.passwordInput = ref;
                }}
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                onSubmitEditing={
                  () => this.confirmPasswordInput && this.confirmPasswordInput._root.focus()
                }
                value={this.state.password}
                secureTextEntry
              />
            </Item>
            <Item floatingLabel>
              <Label>Confirmação de senha</Label>
              <Input
                getRef={(ref) => {
                  this.confirmPasswordInput = ref;
                }}
                autoCapitalize="none"
                onSubmitEditing={this.handleSignup}
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                value={this.state.confirmPassword}
                secureTextEntry
              />
            </Item>
          </Form>
          <View style={styles.formActions}>
            <Button small warning onPress={this.handleBack}>
              <Text>Cancelar</Text>
            </Button>
            <Button small onPress={this.handleSignup}>
              <Text>Cadastrar</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(Signup);
