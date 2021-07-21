export const GET_LAST_CONCERN = 'GET_LAST_CONCERN'

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
