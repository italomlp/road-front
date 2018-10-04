import React from 'react';
import { Provider } from 'react-redux';

import { AsyncStorage } from 'react-native';

import './config/ReactotronConfig';
import { setTopLevelNavigator } from 'services/navigation';
import store from './store';

import Routes from './routes';

AsyncStorage.clear();

const App = () => (
  <Provider store={store}>
    <Routes
      ref={(navigatorRef) => {
        setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
