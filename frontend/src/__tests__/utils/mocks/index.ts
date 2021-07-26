export const careRecipient = {
  validId: 'e3e2bff8-d318-4760-beea-841a75f00227',
  invalidId: 'invalid-id'
}

export const mainObservations = {
  regularMedication: {
    itens: [
      { description: '-', timestamp: '2019-05-10T10:48:40+01:00' },
      { description: '-', timestamp: '2019-05-09T11:40:04+01:00' },
      { description: '-', timestamp: '2019-05-08T16:18:12+01:00' }
    ],
    total: 31
  },
  fluidIntake: {
    itens: [
      { description: 'regular (250ml)', timestamp: '2019-05-09T10:43:10.320Z' },
      { description: 'regular (250ml)', timestamp: '2019-05-08T15:22:15.890Z' },
      { description: 'regular (230ml)', timestamp: '2019-05-08T09:42:28.696Z' }
    ],
    total: 18
  },
  foodIntake: {
    itens: [
      { description: 'snack ', timestamp: '2019-05-07T11:36:04+01:00' },
      { description: 'snack ', timestamp: '2019-05-03T15:55:09+01:00' },
      { description: 'snack ', timestamp: '2019-05-01T19:01:48+01:00' }
    ],
    total: 4
  },
  mood: {
    itens: [
      { description: 'sad (grumpy)', timestamp: '2019-05-02T18:26:02+01:00' },
      {
        description: 'happy ([redacted] )',
        timestamp: '2019-04-30T17:56:31+01:00'
      },
      { description: 'okay ', timestamp: '2019-04-29T14:24:31+01:00' }
    ],
    total: 3
  }
}

export const moodEvents = [
  { mood: 'happy', total: 1 },
  { mood: 'okay', total: 1 },
  { mood: 'sad', total: 1 }
]

export const lastConcern = {
  id: '"831d90a5-1aed-40d3-9cef-a382653a0723"',
  note: '"Safeguarding "',
  severity: '"HIGH"',
  timestamp: `${new Date('2019-05-03T09:48:58+01:00')}`,
  care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
}

export const events = [
  {
    id: 'f547e82d-5e03-4e6f-aad9-e01ad662d4c7',
    eventType: 'alert_raised',
    note: 'test',
    timestamp: '2021-07-20T23:01:23.359Z'
  },
  {
    id: '54127f15-966b-4e19-a224-1aba84fe7c90',
    eventType: 'alert_raised',
    note: null,
    timestamp: '2021-05-12T18:01:20.416Z'
  },
  {
    id: 'b8f1667b-7416-4319-985a-7c3f71aaa130',
    eventType: 'alert_raised',
    note: 'test',
    timestamp: '2019-05-12T18:01:17.209Z'
  },
  {
    id: '04ee88b3-b6cb-452a-84c2-166b54d7d9f7',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: '2019-05-12T18:00:12.930Z'
  },
  {
    id: '136b8ad6-ae0b-462e-8612-0a0cf51450bf',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: '2019-05-12T18:00:12.930Z'
  },
  {
    id: '232d69a5-15f5-4442-b88c-d91e4a548501',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: '2019-05-12T18:00:12.930Z'
  },
  {
    id: '24dc8fea-98c2-4fef-83ae-93f16fe165f3',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: '2019-05-12T18:00:12.930Z'
  },
  {
    id: '2fe20df2-3a47-40e8-b212-e9c9b1a3b8f5',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: '2019-05-12T18:00:12.930Z'
  },
  {
    id: '420b8385-aa91-4da4-9e4e-0b51e3d518f6',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: '2019-05-12T18:00:12.930Z'
  },
  {
    id: '4b34ad7d-38e7-407b-9c8d-431918ea7331',
    eventType: 'no_medication_observation_received',
    note: null,
    timestamp: '2019-05-12T18:00:12.930Z'
  }
]
