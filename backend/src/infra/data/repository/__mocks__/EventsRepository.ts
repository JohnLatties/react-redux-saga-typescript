import { ConcernEvent } from '../../mapping/ConcernEvent'
import { EventsRepository } from '../EventsRepository'



const concernEvents = [
  {
    "id": "\"9b7f8283-71d0-45c6-9a34-d474d7685cf9\"",
    "note": "\"Had a fall\"",
    "severity": "\"HIGH\"",
    "timestamp": new Date("2019-05-08T16:23:54+01:00"),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    "id": "\"71d59583-db98-4ec1-a6c8-9515d72c35c4\"",
    "note": "\"Fall\"",
    "severity": "\"MEDIUM\"",
    "timestamp": new Date("2019-05-07T11:38:28+01:00"),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    "id": "\"eae8f34f-a311-4963-a3e9-7d885802f272\"",
    "note": "\"Had a fall\"",
    "severity": "\"HIGH\"",
    "timestamp": new Date("2019-05-03T16:03:10+01:00"),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    "id": "\"831d90a5-1aed-40d3-9cef-a382653a0723\"",
    "note": "\"Safeguarding \"",
    "severity": "\"HIGH\"",
    "timestamp": new Date("2019-05-03T09:48:58+01:00"),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  }
]

async function lastConcernRaised(careRecipientId: string) {
  const row = concernEvents.find(i => i.care_recipient_id == careRecipientId)
  if(!row) return null

  const { id, note, severity, timestamp } = row
  return { id, note, severity, timestamp } as ConcernEvent
}

function MoodEventsRepository (): EventsRepository  {
  return {
    lastConcernRaised
  }
}

export default MoodEventsRepository
