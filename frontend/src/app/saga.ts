import { all } from 'redux-saga/effects'
import getCareRecipientRegister from './careRecipient/sagas'
import getMainObservationRegister from './mainObservations/sagas'

export default function* rootSaga() {
  yield all([getCareRecipientRegister(), getMainObservationRegister()])
}
