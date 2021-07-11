export const GET_CARE_RECIPIENTE_REQUEST = 'GET_CARE_RECIPIENTE_REQUEST'

export interface GetCareRecipinetRequestAction {
  type: typeof GET_CARE_RECIPIENTE_REQUEST
  payload: string
}

export function getCareRecipient(
  careRecipenteId: string
): GetCareRecipinetRequestAction {
  return {
    type: GET_CARE_RECIPIENTE_REQUEST,
    payload: careRecipenteId
  }
}
