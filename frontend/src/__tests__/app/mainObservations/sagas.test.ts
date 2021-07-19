import { getMainObservations } from '../../../app/mainObservations/actions'
import mainObservationsReducer, {
  initialState
} from '../../../app/mainObservations/reducers'
import { getMainObservationRequest } from '../../../app/mainObservations/sagas'
import { expectSaga } from 'redux-saga-test-plan'
import { careRecipient, mainObservations } from '../../utils/mocks'

describe('Main Observations sagas', () => {
  it('Should update Main Observations state as initial state if request response fail', async () => {
    const invalidCareRecipientId = careRecipient.invalidId
    const getMainObservationsRequestAction = getMainObservations(
      invalidCareRecipientId
    )

    return expectSaga(
      getMainObservationRequest,
      getMainObservationsRequestAction
    )
      .withReducer(mainObservationsReducer)
      .hasFinalState(initialState)
      .run()
  })

  it('Should update Main Observations state as success if request return the main observation values', async () => {
    const careRecipientId = careRecipient.validId
    const getMainObservationsRequestAction =
      getMainObservations(careRecipientId)
    return expectSaga(
      getMainObservationRequest,
      getMainObservationsRequestAction
    )
      .withReducer(mainObservationsReducer)
      .hasFinalState(mainObservations)
      .run()
  })
})
