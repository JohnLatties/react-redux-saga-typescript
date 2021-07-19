import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MainObservationsState } from './models'

const mainObservationEvent = {
  itens: [],
  total: 0
}

export const initialState: MainObservationsState = {
  regularMedication: mainObservationEvent,
  fluidIntake: mainObservationEvent,
  foodIntake: mainObservationEvent,
  mood: mainObservationEvent
}

const mainObservations = createSlice({
  name: 'mainObservations',
  initialState,
  reducers: {
    setMainObservation(
      state: MainObservationsState,
      action: PayloadAction<MainObservationsState>
    ) {
      state = action.payload
      return state
    },
    getMainObservationReset() {
      return { ...initialState }
    }
  }
})

export const { reducer, actions } = mainObservations

export const { setMainObservation, getMainObservationReset } = actions

export default reducer
