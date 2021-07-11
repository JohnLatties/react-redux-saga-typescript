import { all } from 'redux-saga/effects'
import getCareRecipientRegister from './careRecipient/sagas'

export default function* rootSaga() {
  yield all([getCareRecipientRegister()])
}
