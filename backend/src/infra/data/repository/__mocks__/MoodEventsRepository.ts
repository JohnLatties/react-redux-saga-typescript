import { MoodEvent } from '../../mapping/MoodEvents'
import { IMoodEventsRepository } from '../MoodEventsRepository'




const moodEvents = [
  { mood: 'happy', total: 1 , careRecipientId: 'e3e2bff8-d318-4760-beea-841a75f00227'},
  { mood: 'okay', total: 1, careRecipientId: 'e3e2bff8-d318-4760-beea-841a75f00227' },
  { mood: 'sad', total: 1, careRecipientId: 'e3e2bff8-d318-4760-beea-841a75f00227' }
]


async function byCareRecipientId(careRecipientId: string) {

  const rowResult = moodEvents
  .filter(e => e.careRecipientId === careRecipientId)
  .map(({ mood, total}) => ({ mood, total}) )

  if(!rowResult.length) return null

  return rowResult as MoodEvent[]
}

function MoodEventsRepository (): IMoodEventsRepository  {
  return {
    byCareRecipientId
  }
}

export default MoodEventsRepository