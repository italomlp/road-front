import { call, put } from 'redux-saga/effects';

import api from 'services/api';

import { Creators as CarActions } from 'store/ducks/cars';

export function* listCars() {
  try {
    console.tron.log('headers', api.defaults.headers);
    const response = yield call(api.get, '/car');
    yield put(CarActions.listCarsSuccess(response.data));
  } catch (error) {
    yield put(CarActions.listCarsFailure('Erro ao listar carros'));
  }
}
