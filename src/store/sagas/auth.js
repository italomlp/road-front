import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import api from 'services/api';

import { Creators as AuthActions } from 'store/ducks/auth';
import { navigate } from 'services/navigation';

export function* login(action) {
  try {
    const response = yield call(api.post, '/login', action.payload);

    yield put(AuthActions.loginSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.loginFailure('Erro ao fazer login'));
  }
}

export function* saveUser(action) {
  try {
    yield call(AsyncStorage.setItem, '@Road:User', JSON.stringify(action.payload.user));
    api.defaults.headers.authorization = `bearer ${action.payload.user.token}`;
    navigate('App');
  } catch (error) {
    console.tron.log(error);
    yield put(AuthActions.loginFailure('Erro ao salvar usuario.'));
  }
}

export function* logout() {
  try {
    yield call(api.post, '/logout', {});
    api.defaults.headers.authorization = null;
    yield call(AsyncStorage.removeItem, '@Road:User');
    yield put(AuthActions.logoutSuccess());
    navigate('Auth');
  } catch (error) {
    console.tron.log(error);
    yield put(AuthActions.logoutFailure('Erro ao fazer logout.'));
  }
}
