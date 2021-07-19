export const GET_MAIN_OBSERVATIONS = 'GET_MAIN_OBSERVATIONS'

export interface GetMainObservationsAction {
  type: typeof GET_MAIN_OBSERVATIONS
  payload: string
}

export function getMainObservations(
  careRecipenteId: string
): GetMainObservationsAction {
  return {
    type: GET_MAIN_OBSERVATIONS,
    payload: careRecipenteId
  }
}
