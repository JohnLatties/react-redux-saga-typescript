import { RowDataPacket } from 'mysql2'
import { connection } from '../../helper/SQLConnectHelper'
import { EventType, MainObservations, parserTo } from '../mapping/MainObservations'


export interface IMainObservationRepository {
  byCareRecipientId(careRecipientId: string) : Promise<MainObservations | null>
}

async function getLastMainObservation(careRecipientId: string) {
  const query = `
    SELECT
      payload,
      event_type 
    FROM (
        SELECT 
          payload,
          event_type, 
          @event_rank := IF(@current_event = event_type, @event_rank + 1, 1) as event_rank,
          @current_event := event_type
        FROM events
        JOIN (SELECT @current_event := NULL, @event_rank := 0 ) as vars
        WHERE event_type in (
          'regular_medication_taken',
          'fluid_intake_observation',
          'food_intake_observation',
          'mood_observation'
          )
        AND care_recipient_id = ?
        ORDER BY event_type ASC, \`timestamp\` DESC
      ) as ranked_rows
    WHERE event_rank <= 3
  `
  const [rows] = await connection.promise().query(query, [careRecipientId])
  const rowResult = <RowDataPacket[]> rows
  return rowResult
}

async function getTotalMainObservation(careRecipientId: string) {
  const query = `
    SELECT event_type, count(*) as total
    FROM events
    WHERE event_type in ('regular_medication_taken', 'fluid_intake_observation', 'food_intake_observation', 'mood_observation')
    AND care_recipient_id = ?
    GROUP by event_type
  `
  const [rows] = await connection.promise().query(query, [careRecipientId])
  const rowResult = <RowDataPacket[]> rows
  return rowResult
}


async function byCareRecipientId(careRecipientId: string) {
  const [lastMainObservation, totalMainObservation] = await Promise.all([getLastMainObservation(careRecipientId), getTotalMainObservation(careRecipientId)])

  if(!lastMainObservation.length) return null

  return {
    regularMedication : parserTo(EventType.regularMedication, lastMainObservation, totalMainObservation),
    fluidIntake : parserTo(EventType.fluidIntake, lastMainObservation, totalMainObservation),
    foodIntake : parserTo(EventType.foodIntake, lastMainObservation, totalMainObservation),
    mood : parserTo(EventType.Mood, lastMainObservation, totalMainObservation)
  }
}

function MainObservationRepository (): IMainObservationRepository  {
  return {
    byCareRecipientId
  }
}

export default MainObservationRepository
