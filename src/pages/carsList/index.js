import React, { Component } from 'react';

import { FlatList, RefreshControl } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as CarActions } from 'store/ducks/cars';
import { Creators as AuthActions } from 'store/ducks/auth';

import {
  Content,
  Text,
  Spinner,
  Button,
  Header,
  Body,
  Right,
  Container,
  Icon,
  Title,
} from 'native-base';

// import styles from './styles';

import PropTypes from 'prop-types';

import CarItem from './components/carItem';

class CarsList extends Component {
  static propTypes = {
    listCarsRequest: PropTypes.func.isRequired,
    cars: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    logoutRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentWillMount() {
    this.props.listCarsRequest();
  }

  renderCars = () => (this.props.cars.data && this.props.cars.data.length ? (
    <FlatList
      refreshControl={
        (
          <RefreshControl
            refreshing={this.props.cars.loading}
            onRefresh={this.props.listCarsRequest}
          />
        )
      }
      data={this.props.cars.data}
      keyExtractor={car => car._id}
      renderItem={({ item }) => (
        <CarItem
          car={item}
          onPress={() => this.props.navigation.navigate('Car', { car: item })}
        />
      )}
    />
  ) : (
    <Text>Não há carros.</Text>
  ));

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Lista de carros</Title>
          </Body>
          <Right>
            <Button rounded transparent onPress={this.props.logoutRequest}>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <Content>{this.props.cars.loading ? <Spinner /> : this.renderCars()}</Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cars: state.cars,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    listCarsRequest: CarActions.listCarsRequest,
    logoutRequest: AuthActions.logoutRequest,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsList);
