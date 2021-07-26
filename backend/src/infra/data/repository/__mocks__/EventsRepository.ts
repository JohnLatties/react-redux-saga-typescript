import { ConcernEvent } from '../../mapping/ConcernEvent'
import { Event } from '../../mapping/Event'
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


const events = [
  {
    id: 'f547e82d-5e03-4e6f-aad9-e01ad662d4c7',
    eventType: 'alert_raised',
    note: 'test',
    timestamp: new Date('2021-07-20T23:01:23.359Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '54127f15-966b-4e19-a224-1aba84fe7c90',
    eventType: 'alert_raised',
    note: null,
    timestamp: new Date('2021-05-12T18:01:20.416Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: 'b8f1667b-7416-4319-985a-7c3f71aaa130',
    eventType: 'alert_raised',
    note: 'test',
    timestamp: new Date('2019-05-12T18:01:17.209Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '04ee88b3-b6cb-452a-84c2-166b54d7d9f7',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: new Date('2019-05-12T18:00:12.930Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '136b8ad6-ae0b-462e-8612-0a0cf51450bf',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: new Date('2019-05-12T18:00:12.930Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '232d69a5-15f5-4442-b88c-d91e4a548501',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: new Date('2019-05-12T18:00:12.930Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '24dc8fea-98c2-4fef-83ae-93f16fe165f3',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: new Date('2019-05-12T18:00:12.930Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '2fe20df2-3a47-40e8-b212-e9c9b1a3b8f5',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: new Date('2019-05-12T18:00:12.930Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '420b8385-aa91-4da4-9e4e-0b51e3d518f6',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: new Date('2019-05-12T18:00:12.930Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  },
  {
    id: '4b34ad7d-38e7-407b-9c8d-431918ea7331',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: new Date('2019-05-12T18:00:12.930Z'),
    "care_recipient_id": 'e3e2bff8-d318-4760-beea-841a75f00227'
  }
]

async function lastConcernRaised(careRecipientId: string) {
  const row = concernEvents.find(i => i.care_recipient_id == careRecipientId)
  if(!row) return null

  const { id, note, severity, timestamp } = row
  return { id, note, severity, timestamp } as ConcernEvent
}

async function getEvents(careRecipientId: string, limit = 10, skip = 1) {
  const result = events
  .filter(i => i.care_recipient_id === careRecipientId)

  if(!result.length) return null 

  return result
  .map(({id, eventType, note, timestamp}) => ({ id, eventType, note, timestamp })) as Event[]
}

function MoodEventsRepository (): EventsRepository  {
  return {
    lastConcernRaised,
    getEvents
  }
}

export default MoodEventsRepository
