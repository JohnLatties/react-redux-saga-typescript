export interface ConcernEvent {
  id: string
  note: string
  severity: string
  timestamp: Date | string
}

export interface Event {
  id: string
  eventType: string
  note: string
  timestamp: Date | string
}

export interface ObservationEventsState {
  lastConcernEvent: {
    data: ConcernEvent | null
    loading: boolean
  }
  events: {
    data: Event[]
    loading: boolean
    page: number
    perPage: number
  }
}
