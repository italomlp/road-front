import React, { Component } from 'react';

import { AsyncStorage, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';

import LottieView from 'lottie-react-native';

import SplashAnimation from 'assets/splash.json';

import api from 'services/api';

import styles from './styles';

export default class SplashScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  componentDidMount() {
    this.animation.play();
  }

  bootstrapAsync = async () => {
    const values = await Promise.all([
      // new Promise(resolve => setTimeout(() => resolve(), 3000)),
      new Promise(resolve => setTimeout(() => resolve(), 0)),
      AsyncStorage.getItem('@Road:User'),
    ]);
    const user = JSON.parse(values[1]);
    if (user) {
      api.defaults.headers.common.authorization = `bearer ${user.token}`;
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  };

  updateAnimation = (animation) => {
    this.animation = animation;
  };

  render() {
    return (
      <View style={styles.container}>
        <LottieView
          loop={false}
          style={styles.animation}
          ref={this.updateAnimation}
          source={SplashAnimation}
        />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}
