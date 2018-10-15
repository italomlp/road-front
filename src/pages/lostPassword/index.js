import React, { Component } from 'react';

import { View } from 'react-native';

import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Header,
  Left,
  Button,
  Body,
  Right,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Icon,
  Card,
  CardItem,
  Container,
  Title,
} from 'native-base';

import styles from './styles';

class LostPassword extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {};

  handleBack = () => {
    this.props.navigation.goBack();
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
            <Title>Restaurar senha</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card transparent style={styles.infoCard}>
            <CardItem>
              <Body>
                <Text>
                  Para restaurar sua senha, informe abaixo o email usado no cadastro da sua conta.
                  Será enviada uma mensagem para ele com um link para a recuperação de senha.
                  Lembre-se de verificar tanto na caixa de entrada, como no lixo eletrônico.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Form style={styles.formContainer}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => {}}
                keyboardType="email-address"
                value={this.state.email}
              />
            </Item>
          </Form>
          <View style={styles.formActions}>
            <Button small warning onPress={this.handleBack}>
              <Text>Voltar</Text>
            </Button>
            <Button small onPress={() => {}}>
              <Text>Restaurar</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(LostPassword);
// mapStateToProps,
// mapDispatchToProps
