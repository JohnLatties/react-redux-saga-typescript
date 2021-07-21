export interface ConcernEvent {
  id: string
  note: string
  severity: string
  timestamp: Date | string
}

export interface EventsState {
  lastConcernEvent: {
    data: ConcernEvent | null
    loading: boolean
  }
}
