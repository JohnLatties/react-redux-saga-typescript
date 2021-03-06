import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { SaveCareRecipient } from './careRecipient/localStorage'
import careRecipientReducer from './careRecipient/reducers'
import mainObservationsReducer from './mainObservations/reducers'
import moodRating from './moodRating/reducers'
import observationEvents from './observationEvents/reducers'

import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const store = configureStore({
  reducer: {
    careRecipente: careRecipientReducer,
    mainObservations: mainObservationsReducer,
    moodRating: moodRating,
    observationEvents: observationEvents
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
  devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

store.subscribe(() => {
  SaveCareRecipient(store.getState().careRecipente.id)
})

export default store
