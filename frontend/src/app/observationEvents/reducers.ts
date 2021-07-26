import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ObservationEventsState, ConcernEvent, Event } from './models'

export const initialState: ObservationEventsState = {
  lastConcernEvent: {
    data: null,
    loading: false
  },
  events: {
    data: [],
    loading: false,
    page: 0,
    perPage: 10
  }
}

const observationEvents = createSlice({
  name: 'observationEvents',
  initialState,
  reducers: {
    lastConcernEventRequest(state: ObservationEventsState) {
      state.lastConcernEvent.loading = true
      return state
    },
    lastConcernEventReset(state: ObservationEventsState) {
      state.lastConcernEvent.loading = false
      state.lastConcernEvent.data = null
      return state
    },
    setLastConcernEvent(
      state: ObservationEventsState,
      action: PayloadAction<ConcernEvent>
    ) {
      state.lastConcernEvent.data = action.payload
      state.lastConcernEvent.loading = false
      return state
    },
    eventsRequest(
      state: ObservationEventsState,
      action: PayloadAction<number>
    ) {
      state.events.loading = true
      state.events.page = action.payload
      return state
    },
    setEvents(state: ObservationEventsState, action: PayloadAction<Event[]>) {
      state.events.loading = false
      state.events.data = state.events.data.concat(action.payload)
      return state
    },
    eventsReset(state: ObservationEventsState) {
      state.events.loading = false
      state.events.data = []
      state.events.page = 0
      return state
    }
  }
})

export const { reducer, actions } = observationEvents

export const {
  lastConcernEventRequest,
  lastConcernEventReset,
  setLastConcernEvent,
  eventsRequest,
  setEvents,
  eventsReset
} = actions

export default reducer
