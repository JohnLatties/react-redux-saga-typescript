import { initialState, actions } from '../../../app/moodRating/reducers'
import store from '../../../app/store'

describe('Mood Rating reducers', () => {
  afterEach(() => {
    store.dispatch(actions.moodEventsReset())
  })

  it('Should start with initial state', () => {
    const moodRatingInitialState = store.getState().moodRating
    expect(moodRatingInitialState).toEqual(initialState)
  })

  it('Should handle setMoodRating action', () => {
    const moodRatingInitialState = store.getState().moodRating
    expect(moodRatingInitialState.moodEvents.length).toEqual(0)

    const moodEvents = [
      {
        mood: 'a',
        total: 10
      },
      {
        mood: 'b',
        total: 20
      }
    ]

    store.dispatch(actions.setMoodRating(moodEvents))

    const moodRatingCurrentState = store.getState().moodRating
    expect(moodRatingCurrentState.moodEvents.length).toBe(moodEvents.length)
    expect(moodRatingCurrentState.moodEvents[0].total).toBe(moodEvents[0].total)
  })

  it('Should handle moodEventsReset action', () => {
    const moodRatingInitialState = store.getState().moodRating
    expect(moodRatingInitialState.moodEvents.length).toEqual(0)

    const moodEvents = [
      {
        mood: 'a',
        total: 10
      },
      {
        mood: 'b',
        total: 20
      }
    ]

    store.dispatch(actions.setMoodRating(moodEvents))

    const currentMoodRatingState = store.getState().moodRating
    expect(currentMoodRatingState.moodEvents.length).toBe(moodEvents.length)
    expect(currentMoodRatingState.moodEvents[0].total).toBe(moodEvents[0].total)

    store.dispatch(actions.moodEventsReset())

    const lastMoodRatingState = store.getState().moodRating
    expect(lastMoodRatingState).toEqual(initialState)
  })
})
