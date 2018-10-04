import { call, put } from 'redux-saga/effects';

import api from 'services/api';

import { Creators as SignupActions } from 'store/ducks/signup';
import { navigate } from 'services/navigation';

export function* signup(action) {
  try {
    yield call(api.post, '/user', action.payload);
    yield put(SignupActions.signupSuccess());
    navigate('Login');
  } catch (error) {
    yield put(SignupActions.signupFailure('Erro ao cadastrar'));
  }
}
