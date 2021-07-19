import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import careRecipientReducer from './careRecipient/reducers'
import mainObservationsReducer from './mainObservations/reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const store = configureStore({
  reducer: {
    careRecipente: careRecipientReducer,
    mainObservations: mainObservationsReducer
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

export default store
