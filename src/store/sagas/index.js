import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from 'store/ducks/auth';
import { Types as SignupTypes } from 'store/ducks/signup';
import { Types as CarTypes } from 'store/ducks/cars';

import { login, saveUser, logout } from './auth';
import { signup } from './signup';
import { listCars } from './cars';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGIN_SUCCESS, saveUser),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(SignupTypes.SIGNUP_REQUEST, signup),
    takeLatest(CarTypes.LIST_CAR_REQUEST, listCars),
  ]);
}
