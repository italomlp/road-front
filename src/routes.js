import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

// import Main from 'pages/main';
import Login from 'pages/login';
import SplashScreen from 'pages/splashScreen';
import Signup from 'pages/signup';
import LostPassword from 'pages/lostPassword';
import CarList from 'pages/carsList';

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    LostPassword: { screen: LostPassword },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const AppStack = createStackNavigator(
  {
    CarList: { screen: CarList },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

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
