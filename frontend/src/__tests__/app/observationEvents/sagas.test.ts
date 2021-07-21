import { getLastConcern } from '../../../app/observationEvents/actions'
import observationEventsReducer, {
  initialState
} from '../../../app/observationEvents/reducers'
import { getLastConcernRequest } from '../../../app/observationEvents/sagas'
import { expectSaga } from 'redux-saga-test-plan'
import { careRecipient, lastConcern } from '../../utils/mocks'

describe('Observation events sagas', () => {
  it('Should update lastConcernEvent state as initial state if request response fail', async () => {
    const invalidCareRecipientId = careRecipient.invalidId
    const getLastConcernAction = getLastConcern(invalidCareRecipientId)

    return expectSaga(getLastConcernRequest, getLastConcernAction)
      .withReducer(observationEventsReducer)
      .hasFinalState(initialState)
      .run()
  })

  it('Should update lastConcernEvent state as success if request return values', async () => {
    const careRecipientId = careRecipient.validId
    const getLastConcernAction = getLastConcern(careRecipientId)

    const lastConcernEvent = {
      data: lastConcern,
      loading: false
    }
    const state = { ...initialState, lastConcernEvent }

    return expectSaga(getLastConcernRequest, getLastConcernAction)
      .withReducer(observationEventsReducer)
      .hasFinalState(state)
      .run()
  })
})
