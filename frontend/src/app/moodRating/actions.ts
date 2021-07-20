export const GET_MOOD_EVENTS = 'GET_MOOD_EVENTS'

export interface GetMoodEventsAction {
  type: typeof GET_MOOD_EVENTS
  payload: string
}

export function getMoodEvents(careRecipenteId: string): GetMoodEventsAction {
  return {
    type: GET_MOOD_EVENTS,
    payload: careRecipenteId
  }
}
