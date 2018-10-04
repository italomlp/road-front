import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from 'store/ducks/auth';
import { Types as SignupTypes } from 'store/ducks/signup';

import { login, saveUser, logout } from './auth';
import { signup } from './signup';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGIN_SUCCESS, saveUser),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(SignupTypes.SIGNUP_REQUEST, signup),
  ]);
}
