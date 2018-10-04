import React, { Component } from 'react';

import { AsyncStorage, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';

import LottieView from 'lottie-react-native';

import SplashAnimation from 'assets/splash.json';

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
      new Promise(resolve => setTimeout(() => resolve(), 3000)),
      AsyncStorage.getItem('@Road:User'),
    ]);
    const userToken = values[1];
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
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
          imageAssetsFolder="lottie/splash"
          source={SplashAnimation}
        />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}
