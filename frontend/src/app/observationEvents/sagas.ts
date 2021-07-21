import { takeEvery, call, put, all } from 'redux-saga/effects'
import { GetLastConcernAction, GET_LAST_CONCERN } from './actions'
import {
  lastConcernEventRequest,
  lastConcernEventReset,
  setLastConcernEvent
} from './reducers'
import * as api from './service.api'

export function* getLastConcernRequest(action: GetLastConcernAction) {
  yield put(lastConcernEventRequest())
  try {
    const { data } = yield call(api.getLastConcern, action.payload)
    yield put(setLastConcernEvent(data))
  } catch (error) {
    yield put(lastConcernEventReset())
  }
}

export function* getLastConcernRegister() {
  yield takeEvery(GET_LAST_CONCERN, getLastConcernRequest)
}

export function* observationEventsRegister() {
  yield all([getLastConcernRegister()])
}

export default observationEventsRegister
