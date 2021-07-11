import { getCareRecipient } from '../../../app/careRecipient/actions'
import careRecipientReducer from '../../../app/careRecipient/reducers'
import { getCareRecipientRequest } from '../../../app/careRecipient/sagas'
import { expectSaga } from 'redux-saga-test-plan'
import { caraRecipient } from '../../utils/mocks'

describe('Care recipient sagas', () => {
  it('Should update Care recipient state as failed if request response fail', async () => {
    const invalidCareRecipientId = caraRecipient.invalidId
    const getCareRecipientRequestAction = getCareRecipient(
      invalidCareRecipientId
    )
    return expectSaga(getCareRecipientRequest, getCareRecipientRequestAction)
      .withReducer(careRecipientReducer)
      .hasFinalState({
        id: '',
        loading: false,
        failed: true
      })
      .run()
  })

  it('Should update Care recipient state as success if find a care recipient', async () => {
    const careRecipientId = caraRecipient.validId
    const getCareRecipientRequestAction = getCareRecipient(careRecipientId)
    return expectSaga(getCareRecipientRequest, getCareRecipientRequestAction)
      .withReducer(careRecipientReducer)
      .hasFinalState({
        id: careRecipientId,
        loading: false,
        failed: false
      })
      .run()
  })
})