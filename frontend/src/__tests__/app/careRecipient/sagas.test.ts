import { getCareRecipient } from '../../../app/careRecipient/actions'
import careRecipientReducer from '../../../app/careRecipient/reducers'
import { getCareRecipientRequest } from '../../../app/careRecipient/sagas'
import { expectSaga } from 'redux-saga-test-plan'
import { careRecipient } from '../../utils/mocks'

describe('Care recipient sagas', () => {
  it('Should update Care recipient state as failed if request response fail', async () => {
    const invalidCareRecipientId = careRecipient.invalidId
    const getCareRecipientRequestAction = getCareRecipient(
      invalidCareRecipientId
    )
    return expectSaga(getCareRecipientRequest, getCareRecipientRequestAction)
      .withReducer(careRecipientReducer)
      .hasFinalState({
        id: '',
        loading: false,
        failed: true,
        isLogged: false
      })
      .run()
  })

  it('Should update Care recipient state as success if find a care recipient', async () => {
    const careRecipientId = careRecipient.validId
    const getCareRecipientRequestAction = getCareRecipient(careRecipientId)
    return expectSaga(getCareRecipientRequest, getCareRecipientRequestAction)
      .withReducer(careRecipientReducer)
      .hasFinalState({
        id: careRecipientId,
        loading: false,
        failed: false,
        isLogged: true
      })
      .run()
  })
})
