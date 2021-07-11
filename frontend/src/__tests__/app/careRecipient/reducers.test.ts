import { initialState, actions } from '../../../app/careRecipient/reducers'
import store from '../../../app/store'

describe('Care recipient reducers', () => {
  afterEach(() => {
    store.dispatch(actions.removeCareRecipient())
  })
  it('Should start with initial state', () => {
    const careRecipenteInitialState = store.getState().careRecipente
    expect(careRecipenteInitialState).toEqual(initialState)
  })

  it('Should handle requestCareRecipient action', () => {
    const careRecipenteInitialState = store.getState().careRecipente
    expect(careRecipenteInitialState).toEqual(initialState)

    store.dispatch(actions.requestCareRecipient())

    const currentRecipenteInitialState = store.getState().careRecipente
    expect(currentRecipenteInitialState.loading).toBeTruthy()
  })

  it('Should handle setCareRecipient action', () => {
    const careRecipenteId = '1233343423'
    store.dispatch(actions.setCareRecipient(careRecipenteId))

    const currentRecipenteInitialState = store.getState().careRecipente
    expect(currentRecipenteInitialState.id).toBe(careRecipenteId)
    expect(currentRecipenteInitialState.loading).toBeFalsy()
  })

  it('Should handle getCareRecipientFailure action', () => {
    const careRecipenteInitialState = store.getState().careRecipente
    expect(careRecipenteInitialState.failed).toBeFalsy()

    store.dispatch(actions.getCareRecipientFailure())

    const currentRecipenteInitialState = store.getState().careRecipente
    expect(currentRecipenteInitialState).toBeTruthy()
    expect(currentRecipenteInitialState.loading).toBeFalsy()
  })

  it('Should handle removeCareRecipient action', () => {
    const careRecipenteId = '1233343423'
    store.dispatch(actions.setCareRecipient(careRecipenteId))
    const careRecipenteIdState = store.getState().careRecipente

    expect(careRecipenteIdState.id).toBe(careRecipenteId)

    store.dispatch(actions.removeCareRecipient())
    const stateAfterRemoveAcion = store.getState().careRecipente

    expect(stateAfterRemoveAcion).toEqual(initialState)
  })
})
