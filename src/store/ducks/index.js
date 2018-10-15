import { combineReducers } from 'redux';

import auth from './auth';
import signup from './signup';
import cars from './cars';

export default combineReducers({
  auth,
  signup,
  cars,
});
