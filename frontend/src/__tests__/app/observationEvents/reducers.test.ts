import { initialState, actions } from '../../../app/observationEvents/reducers'
import store from '../../../app/store'

describe('Observation events reducers', () => {
  afterEach(() => {
    store.dispatch(actions.lastConcernEventReset())
  })

  it('Should start with initial state', () => {
    const observationEventsState = store.getState().observationEvents
    expect(observationEventsState).toEqual(initialState)
  })

  it('Should handle lastConcernEventRequest action', () => {
    const observationEventsState = store.getState().observationEvents
    expect(observationEventsState.lastConcernEvent.loading).toBeFalsy()

    store.dispatch(actions.lastConcernEventRequest())

    const currentObservationEventsState = store.getState().observationEvents
    expect(currentObservationEventsState.lastConcernEvent.loading).toBeTruthy()
  })

  it('Should handle lastConcernEventReset action', () => {
    const observationEventsState = store.getState().observationEvents
    expect(observationEventsState.lastConcernEvent.loading).toBeFalsy()

    store.dispatch(actions.lastConcernEventRequest())

    const currentObservationEventsState = store.getState().observationEvents
    expect(currentObservationEventsState.lastConcernEvent.loading).toBeTruthy()

    store.dispatch(actions.lastConcernEventReset())

    const lastObservationEventsState = store.getState().observationEvents
    expect(lastObservationEventsState.lastConcernEvent.loading).toBeFalsy()
  })

  it('Should handle setLastConcernEvent action', () => {
    const observationEventsState = store.getState().observationEvents
    expect(observationEventsState.lastConcernEvent.loading).toBeFalsy()

    const lastConcern = {
      id: 'id',
      note: 'note',
      severity: 'severity',
      timestamp: `${new Date()}`
    }
    store.dispatch(actions.setLastConcernEvent(lastConcern))

    const currentObservationEventsState = store.getState().observationEvents
    expect(currentObservationEventsState.lastConcernEvent.loading).toBeFalsy()
    expect(currentObservationEventsState.lastConcernEvent.data).toEqual(
      lastConcern
    )
  })
})
