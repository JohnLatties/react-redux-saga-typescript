import { getMoodEvents } from '../../../app/moodRating/actions'
import moodRatingReducer, {
  initialState
} from '../../../app/moodRating/reducers'
import { getMoodEventsRequest } from '../../../app/moodRating/sagas'
import { expectSaga } from 'redux-saga-test-plan'
import { careRecipient, moodEvents } from '../../utils/mocks'

describe('Mood rating sagas', () => {
  it('Should update Mood rating state as initial state if request response fail', async () => {
    const invalidCareRecipientId = careRecipient.invalidId
    const getmoodEventsRequestAction = getMoodEvents(invalidCareRecipientId)

    return expectSaga(getMoodEventsRequest, getmoodEventsRequestAction)
      .withReducer(moodRatingReducer)
      .hasFinalState(initialState)
      .run()
  })

  it('Should update Main Observations state as success if request return the main observation values', async () => {
    const careRecipientId = careRecipient.validId
    const getmoodRatingRequestAction = getMoodEvents(careRecipientId)
    return expectSaga(getMoodEventsRequest, getmoodRatingRequestAction)
      .withReducer(moodRatingReducer)
      .hasFinalState({ moodEvents })
      .run()
  })
})
