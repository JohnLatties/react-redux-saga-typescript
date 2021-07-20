import { takeEvery, call, put } from 'redux-saga/effects'
import { GetMoodEventsAction, GET_MOOD_EVENTS } from './actions'
import { setMoodRating, moodEventsReset } from './reducers'
import * as api from './service.api'

export function* getMoodEventsRequest(action: GetMoodEventsAction) {
  try {
    const { data } = yield call(api.getMoodEvents, action.payload)
    yield put(setMoodRating(data))
  } catch (error) {
    yield put(moodEventsReset())
  }
}

export function* getMoodRatingRegister() {
  yield takeEvery(GET_MOOD_EVENTS, getMoodEventsRequest)
}

export default getMoodRatingRegister
