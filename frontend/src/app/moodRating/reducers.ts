import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MoodEvent, MoodRatingState } from './models'

export const initialState: MoodRatingState = {
  moodEvents: []
}

const moodRating = createSlice({
  name: 'moodRating',
  initialState,
  reducers: {
    setMoodRating(state: MoodRatingState, action: PayloadAction<MoodEvent[]>) {
      state.moodEvents = action.payload
      return state
    },
    moodEventsReset() {
      return { ...initialState }
    }
  }
})

export const { reducer, actions } = moodRating

export const { setMoodRating, moodEventsReset } = actions

export default reducer
