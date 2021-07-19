import { MainObservationsState } from '../../../app/mainObservations/models'
import { initialState, actions } from '../../../app/mainObservations/reducers'
import store from '../../../app/store'

describe('Main Observations reducers', () => {
  afterEach(() => {
    store.dispatch(actions.getMainObservationReset())
  })

  it('Should start with initial state', () => {
    const mainObservationsInitialState = store.getState().mainObservations
    expect(mainObservationsInitialState).toEqual(initialState)
  })

  it('Should handle setMainObservation action', () => {
    const mainObservationsInitialState = store.getState().mainObservations
    expect(mainObservationsInitialState).toEqual(initialState)
    expect(mainObservationsInitialState.fluidIntake.total).toBe(0)

    const mainObservationEvent = {
      itens: [],
      total: 10
    }
    const newMainObservations: MainObservationsState = {
      regularMedication: mainObservationEvent,
      fluidIntake: mainObservationEvent,
      foodIntake: mainObservationEvent,
      mood: mainObservationEvent
    }

    store.dispatch(actions.setMainObservation(newMainObservations))

    const currentMainObservationsState = store.getState().mainObservations
    expect(currentMainObservationsState.fluidIntake.total).toBe(10)
    expect(currentMainObservationsState.foodIntake.total).toBe(10)
    expect(currentMainObservationsState.mood.total).toBe(10)
    expect(currentMainObservationsState.regularMedication.total).toBe(10)
  })

  it('Should handle getMainObservationReset action', () => {
    const mainObservationsInitialState = store.getState().mainObservations
    expect(mainObservationsInitialState).toEqual(initialState)
    expect(mainObservationsInitialState.fluidIntake.total).toBe(0)

    const mainObservationEvent = {
      itens: [],
      total: 10
    }
    const newMainObservations: MainObservationsState = {
      regularMedication: mainObservationEvent,
      fluidIntake: mainObservationEvent,
      foodIntake: mainObservationEvent,
      mood: mainObservationEvent
    }

    store.dispatch(actions.setMainObservation(newMainObservations))

    const currentMainObservationsState = store.getState().mainObservations
    expect(currentMainObservationsState.fluidIntake.total).toBe(10)
    expect(currentMainObservationsState.foodIntake.total).toBe(10)
    expect(currentMainObservationsState.mood.total).toBe(10)
    expect(currentMainObservationsState.regularMedication.total).toBe(10)

    store.dispatch(actions.getMainObservationReset())

    const resetMainObservationsState = store.getState().mainObservations
    expect(resetMainObservationsState.fluidIntake.total).toBe(0)
    expect(resetMainObservationsState.foodIntake.total).toBe(0)
    expect(resetMainObservationsState.mood.total).toBe(0)
    expect(resetMainObservationsState.regularMedication.total).toBe(0)
  })
})
