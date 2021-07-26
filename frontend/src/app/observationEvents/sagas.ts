import { takeEvery, call, put, all } from 'redux-saga/effects'
import {
  GetLastConcernAction,
  GetObservationEventsAction,
  GET_LAST_CONCERN,
  GET_OBSERVATION_EVENTS
} from './actions'
import {
  eventsRequest,
  eventsReset,
  lastConcernEventRequest,
  lastConcernEventReset,
  setEvents,
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

export function* getObservationEventsRequest(
  action: GetObservationEventsAction
) {
  const { careRecipientId, perPage, page } = action.payload
  yield put(eventsRequest(page))
  try {
    const { data } = yield call(
      api.getObservationEvents,
      careRecipientId,
      perPage,
      page
    )
    yield put(setEvents(data))
  } catch (error) {
    yield put(eventsReset())
  }
}

export function* geObservationEventsRegister() {
  yield takeEvery(GET_OBSERVATION_EVENTS, getObservationEventsRequest)
}

export function* observationEventsRegister() {
  yield all([getLastConcernRegister(), geObservationEventsRegister()])
}

export default observationEventsRegister
