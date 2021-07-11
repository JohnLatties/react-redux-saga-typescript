import { takeEvery, call, put } from 'redux-saga/effects'
import {
  GetCareRecipinetRequestAction,
  GET_CARE_RECIPIENTE_REQUEST
} from './actions'
import {
  setCareRecipient,
  getCareRecipientFailure,
  requestCareRecipient
} from './reducers'
import * as api from './service.api'

export function* getCareRecipientRequest(
  action: GetCareRecipinetRequestAction
) {
  yield put(requestCareRecipient())
  try {
    const { data } = yield call(api.getCareRecipient, action.payload)
    yield put(setCareRecipient(data.id))
  } catch (error) {
    yield put(getCareRecipientFailure())
  }
}

export function* getCareRecipientRegister() {
  yield takeEvery(GET_CARE_RECIPIENTE_REQUEST, getCareRecipientRequest)
}

export default getCareRecipientRegister
