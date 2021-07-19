import { takeEvery, call, put } from 'redux-saga/effects'
import { GetMainObservationsAction, GET_MAIN_OBSERVATIONS } from './actions'
import { setMainObservation, getMainObservationReset } from './reducers'
import * as api from './service.api'

export function* getMainObservationRequest(action: GetMainObservationsAction) {
  try {
    const { data } = yield call(api.getMainObservations, action.payload)
    yield put(setMainObservation(data))
  } catch (error) {
    yield put(getMainObservationReset())
  }
}

export function* getMainObservationRegister() {
  yield takeEvery(GET_MAIN_OBSERVATIONS, getMainObservationRequest)
}

export default getMainObservationRegister
