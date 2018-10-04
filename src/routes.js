import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Main from 'pages/main';
import Login from 'pages/login';
import SplashScreen from 'pages/splashScreen';
import Signup from 'pages/signup';

const AuthStack = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
});

const AppStack = createStackNavigator({
  Main: { screen: Main },
});

export default createSwitchNavigator(
  {
    SplashScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);
