export const GET_LAST_CONCERN = 'GET_LAST_CONCERN'
export const GET_OBSERVATION_EVENTS = 'GET_OBSERVATION_EVENTS'

export interface GetLastConcernAction {
  type: typeof GET_LAST_CONCERN
  payload: string
}

export function getLastConcern(careRecipenteId: string): GetLastConcernAction {
  return {
    type: GET_LAST_CONCERN,
    payload: careRecipenteId
  }
}

interface ObservationEventsActionPayload {
  careRecipientId: string
  page: number
  perPage: number
}

export interface GetObservationEventsAction {
  type: typeof GET_OBSERVATION_EVENTS
  payload: ObservationEventsActionPayload
}

export function getObservationEvents(
  payload: ObservationEventsActionPayload
): GetObservationEventsAction {
  return {
    type: GET_OBSERVATION_EVENTS,
    payload
  }
}
