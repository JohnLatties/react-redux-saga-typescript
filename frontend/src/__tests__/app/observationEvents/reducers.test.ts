import { initialState, actions } from '../../../app/observationEvents/reducers'
import store from '../../../app/store'

describe('Observation events reducers', () => {
  afterEach(() => {
    store.dispatch(actions.lastConcernEventReset())
    store.dispatch(actions.eventsReset())
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

  it('Should handle eventsRequest action', () => {
    const observationEventsState = store.getState().observationEvents
    expect(observationEventsState.events.loading).toBeFalsy()

    const page = 1
    store.dispatch(actions.eventsRequest(page))

    const currentObservationEventsState = store.getState().observationEvents
    expect(currentObservationEventsState.events.loading).toBeTruthy()
    expect(currentObservationEventsState.events.page).toBe(page)
  })

  it('Should handle setEvents action', () => {
    const observationEventsState = store.getState().observationEvents
    expect(observationEventsState.events.loading).toBeFalsy()

    const page = 1
    store.dispatch(actions.eventsRequest(page))

    const currentObservationEventsState = store.getState().observationEvents
    expect(currentObservationEventsState.events.loading).toBeTruthy()
    expect(currentObservationEventsState.events.page).toBe(page)

    const event = [
      {
        id: 'id',
        eventType: 'event',
        note: 'note',
        timestamp: `${new Date()}`
      }
    ]

    store.dispatch(actions.setEvents(event))

    const lastState = store.getState().observationEvents

    expect(lastState.events.data.length).toBe(event.length)
    expect(lastState.events.data[0]).toEqual(event[0])
  })

  it('Should handle eventsReset action', () => {
    const event = [
      {
        id: 'id',
        eventType: 'event',
        note: 'note',
        timestamp: `${new Date()}`
      }
    ]

    store.dispatch(actions.setEvents(event))

    const currentState = store.getState().observationEvents

    expect(currentState.events.data.length).toBe(event.length)
    expect(currentState.events.data[0]).toEqual(event[0])

    store.dispatch(actions.eventsReset())

    const lastState = store.getState().observationEvents
    expect(lastState.events.data.length).toBe(0)
    expect(lastState.events.loading).toBeFalsy()
    expect(lastState.events.page).toBe(0)
  })
})
