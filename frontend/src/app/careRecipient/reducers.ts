import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CareRecipientState } from './models'

export const initialState: CareRecipientState = {
  id: '',
  loading: false,
  failed: false,
  isLogged: false
}

const careRecipient = createSlice({
  name: 'careRecipient',
  initialState,
  reducers: {
    requestCareRecipient(state: CareRecipientState) {
      return { ...state, loading: true, failed: false }
    },
    setCareRecipient(state: CareRecipientState, action: PayloadAction<string>) {
      return { ...state, id: action.payload, loading: false, isLogged: true }
    },
    getCareRecipientFailure(state: CareRecipientState) {
      return { ...state, failed: true, loading: false }
    },
    removeCareRecipient() {
      return { ...initialState }
    }
  }
})

export const { reducer, actions } = careRecipient

export const {
  setCareRecipient,
  getCareRecipientFailure,
  requestCareRecipient,
  removeCareRecipient
} = actions

export default reducer
