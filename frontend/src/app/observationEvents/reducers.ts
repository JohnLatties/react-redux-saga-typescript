import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventsState, ConcernEvent } from './models'

export const initialState: EventsState = {
  lastConcernEvent: {
    data: null,
    loading: false
  }
}

const observationEvents = createSlice({
  name: 'observationEvents',
  initialState,
  reducers: {
    lastConcernEventRequest(state: EventsState) {
      state.lastConcernEvent.loading = true
      return state
    },
    lastConcernEventReset(state: EventsState) {
      state.lastConcernEvent.loading = false
      state.lastConcernEvent.data = null
      return state
    },
    setLastConcernEvent(
      state: EventsState,
      action: PayloadAction<ConcernEvent>
    ) {
      state.lastConcernEvent.data = action.payload
      state.lastConcernEvent.loading = false
      return state
    }
  }
})

export const { reducer, actions } = observationEvents

export const {
  lastConcernEventRequest,
  lastConcernEventReset,
  setLastConcernEvent
} = actions

export default reducer
