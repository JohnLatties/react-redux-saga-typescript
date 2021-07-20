export interface MoodEvent {
  mood: string
  total: number
}

export interface MoodRatingState {
  moodEvents: MoodEvent[]
}
