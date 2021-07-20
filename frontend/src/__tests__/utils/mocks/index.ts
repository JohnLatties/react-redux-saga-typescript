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
