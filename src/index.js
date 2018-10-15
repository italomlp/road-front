import React from 'react';
import { Provider } from 'react-redux';

// import { AsyncStorage } from 'react-native';

import { setTopLevelNavigator } from 'services/navigation';

import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

// AsyncStorage.clear();

const App = () => (
  <Provider store={store}>
    <StyleProvider style={getTheme()}>
      <Routes
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    </StyleProvider>
  </Provider>
);

export default App;
