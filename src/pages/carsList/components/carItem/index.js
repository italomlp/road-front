import React from 'react';

import {
  Text, Card, CardItem, Body, Right, Left, H3,
} from 'native-base';

import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});

const CarItem = ({ car, onPress }) => {
  const {
    model, brand, year, plate, odometer,
  } = car;

  return (
    <Touchable
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#74D85E', false)}
      useForeground
    >
      <Card style={styles.card}>
        <CardItem header bordered>
          <Body>
            <H3>{`${model} - ${brand}`}</H3>
            <Text note>{year}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text note>{`Placa: ${plate}`}</Text>
          </Left>
          <Body />
          <Right>
            <Text note>
              {odometer}
              kms
            </Text>
          </Right>
        </CardItem>
      </Card>
    </Touchable>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    model: PropTypes.string,
    brand: PropTypes.string,
    year: PropTypes.string,
    plate: PropTypes.string,
    odometer: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CarItem;
