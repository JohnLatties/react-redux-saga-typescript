import { RowDataPacket } from 'mysql2'
import { EventType, MainObservations, parserTo } from '../../mapping/MainObservations'


export interface IMainObservationRepository {
  byCareRecipientId(careRecipientId: string) : Promise<MainObservations | null>
}

const mainObservationsData = [
  {
    payload: {
      id: 'd97df093-063d-4351-95c1-8ef1f061e21a',
      fluid: 'regular',
      observed: true,
      visit_id: '4c9d20fc-c65d-4ddc-9212-937c453c60be',
      timestamp: '2019-05-09T10:43:10.320Z',
      event_type: 'fluid_intake_observation',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      care_recipient_id: 'other-2',
      consumed_volume_ml: 250
    },
    event_type: 'fluid_intake_observation'
  },
  {
    payload: {
      id: 'd97df093-063d-4351-95c1-8ef1f061e21a',
      fluid: 'regular',
      observed: true,
      visit_id: '4c9d20fc-c65d-4ddc-9212-937c453c60be',
      timestamp: '2019-05-09T10:43:10.320Z',
      event_type: 'fluid_intake_observation',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227',
      consumed_volume_ml: 250
    },
    event_type: 'fluid_intake_observation'
  },
  {
    payload: {
      id: 'e8716583-0f30-4901-8b77-818b9fd08ca1',
      fluid: 'regular',
      observed: true,
      visit_id: '0647fc92-4b9a-4927-ab78-40c8be734aee',
      timestamp: '2019-05-08T15:22:15.890Z',
      event_type: 'fluid_intake_observation',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227',
      consumed_volume_ml: 250
    },
    event_type: 'fluid_intake_observation'
  },
  {
    payload: {
      id: 'a43a4f7f-3699-467e-ae19-9badf00febc8',
      fluid: 'regular',
      observed: true,
      visit_id: '37f5dc0f-a122-472e-bd28-6984b8441903',
      timestamp: '2019-05-08T09:42:28.696Z',
      event_type: 'fluid_intake_observation',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227',
      consumed_volume_ml: 230
    },
    event_type: 'fluid_intake_observation'
  },
  {
    payload: {
      id: '17efbd17-6c12-4679-9cfb-ddd890eb9e99',
      meal: 'snack',
      note: '',
      visit_id: '27e6ed82-412a-45bf-a2d8-91265a1e7d85',
      timestamp: '2019-05-07T11:36:04+01:00',
      event_type: 'food_intake_observation',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'food_intake_observation'
  },
  {
    payload: {
      id: 'cd18a67a-48cc-4fdc-a672-d5f875947d3a',
      meal: 'snack',
      note: '',
      visit_id: 'f7deea54-8de7-4bd6-897b-c7f75ca2865c',
      timestamp: '2019-05-03T15:55:09+01:00',
      event_type: 'food_intake_observation',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'food_intake_observation'
  },
  {
    payload: {
      id: '43d1c5e0-2d1d-466a-96f8-ee932616d6d0',
      meal: 'snack',
      note: '',
      visit_id: '9b42ec5a-b555-4533-b5b7-3113c99963a7',
      timestamp: '2019-05-01T19:01:48+01:00',
      event_type: 'food_intake_observation',
      caregiver_id: 'e00e5757-8760-4f6b-bf44-0a2f613e0127',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'food_intake_observation'
  },
  {
    payload: {
      id: '397f15f2-5479-40c1-ada0-cf2fe7fe79e5',
      mood: 'sad',
      note: 'grumpy',
      visit_id: 'af4afbea-4857-4c73-a0f7-45e12c454489',
      timestamp: '2019-05-02T18:26:02+01:00',
      event_type: 'mood_observation',
      caregiver_id: '1d566baa-19bb-4d9f-b088-0b37f35cf1ff',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'mood_observation'
  },
  {
    payload: {
      id: '674963c4-8a9e-456c-9140-abd67bf8be2e',
      mood: 'happy',
      note: '[redacted] ',
      visit_id: 'c38c6fa9-d928-4e85-9125-3986e177e792',
      timestamp: '2019-04-30T17:56:31+01:00',
      event_type: 'mood_observation',
      caregiver_id: 'e00e5757-8760-4f6b-bf44-0a2f613e0127',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'mood_observation'
  },
  {
    payload: {
      id: 'de6c58ce-7ab8-4dd5-ae89-ea7238d1a680',
      mood: 'okay',
      visit_id: 'ef22785b-4b73-4099-bb03-d7d5e5b7fb11',
      timestamp: '2019-04-29T14:24:31+01:00',
      event_type: 'mood_observation',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'mood_observation'
  },
  {
    payload: {
      id: 'bd1c2786-38e1-4dec-8aea-0bc6ea8bfeb9',
      visit_id: '3b9f786c-6634-41c3-87fd-643412e389df',
      timestamp: '2019-05-10T10:48:40+01:00',
      event_type: 'regular_medication_taken',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      medication_type: 'SCHEDULED',
      task_instance_id: 'bXwyMTNiZGFhNC0zYmQxLTQ5YzQtODIxMC0xZTY2NDE5ZGFmOWZ8MjAxOS0wNS0xMFQwNzowMDowMC4wMDBa',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'regular_medication_taken'
  },
  {
    payload: {
      id: '263261a0-f378-4af1-bdf4-555d233267b4',
      visit_id: '4c9d20fc-c65d-4ddc-9212-937c453c60be',
      timestamp: '2019-05-09T11:40:04+01:00',
      event_type: 'regular_medication_taken',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      medication_type: 'SCHEDULED',
      task_instance_id: 'bXwyMTNiZGFhNC0zYmQxLTQ5YzQtODIxMC0xZTY2NDE5ZGFmOWZ8MjAxOS0wNS0wOVQwNzowMDowMC4wMDBa',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'regular_medication_taken'
  },
  {
    payload: {
      id: 'ced05887-fb1d-44d2-81c9-3746b997e373',
      visit_id: '0647fc92-4b9a-4927-ab78-40c8be734aee',
      timestamp: '2019-05-08T16:18:12+01:00',
      event_type: 'regular_medication_taken',
      caregiver_id: 'd8d66637-c3d6-4c58-a254-3b274a031fec',
      medication_type: 'SCHEDULED',
      task_instance_id: 'bXw0YmViYTY1MC0wYTNjLTRhYjctYWIxMy1iOGFiOTU2ZTkzYWR8MjAxOS0wNS0wOFQwODowMDowMC4wMDBa',
      care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227'
    },
    event_type: 'regular_medication_taken'
  }
] as RowDataPacket[]

const totalMainObservation = [
  {
    event_type: 'regular_medication_taken',
    total: 10
  },
  {
    event_type: 'fluid_intake_observation',
    total: 11
  },
  {
    event_type: 'food_intake_observation',
    total: 12
  },
  {
    event_type: 'mood_observation',
    total: 13
  }
] as RowDataPacket[]


async function byCareRecipientId(careRecipientId: string) {

  const rows = mainObservationsData.filter(i => i.payload.care_recipient_id === careRecipientId)

  if(!rows.length) return null

  return {
    regularMedication : parserTo(EventType.regularMedication, rows, totalMainObservation),
    fluidIntake : parserTo(EventType.fluidIntake, rows, totalMainObservation),
    foodIntake : parserTo(EventType.foodIntake, rows, totalMainObservation),
    mood : parserTo(EventType.Mood, rows, totalMainObservation)
  }
}

function MainObservationRepository (): IMainObservationRepository  {
  return {
    byCareRecipientId
  }
}

export default MainObservationRepository
