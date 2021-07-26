import { RowDataPacket } from 'mysql2'
import { connection } from '../../helper/SQLConnectHelper'
import { ConcernEvent } from '../mapping/ConcernEvent'
import { Event } from '../mapping/Event'


export interface EventsRepository {
  lastConcernRaised(careRecipientId: string) : Promise<ConcernEvent | null>
  getEvents(careRecipientId: string, limit?: number, skip?: number): Promise<Event[] | null>
}


async function lastConcernRaised(careRecipientId: string) {
  const query = `
    SELECT
      payload->'$.id' as id,
      payload->'$.note' as note,
      payload->'$.severity' as severity,
      payload->'$.timestamp' as timestamp
    FROM events
    WHERE care_recipient_id = ?
    AND event_type = 'concern_raised'
    ORDER BY \`timestamp\` DESC 
  `
  const [rows] = await connection.promise().query(query, [careRecipientId])
  const rowResult = <RowDataPacket[]> rows

  if(!rowResult.length) return null

  return rowResult[0] as ConcernEvent
}

async function getEvents(careRecipientId: string, limit = 10, skip = 1) {
  const query = `
    SELECT
      payload->'$.id' as id,
      payload->'$.event_type' as eventType,
      payload->'$.note' as note,
      payload->'$.timestamp' as timestamp
    FROM events
    WHERE care_recipient_id = ? 
    ORDER BY \`timestamp\` DESC
    LIMIT ?
    OFFSET ?
  `

  const [rows] = await connection.promise().query(query, [careRecipientId, limit, ((skip-1) * limit)])
  const rowResult = <RowDataPacket[]> rows

  if(!rowResult.length) return null

  return rowResult as Event[]
}

function MoodEventsRepository (): EventsRepository  {
  return {
    lastConcernRaised,
    getEvents
  }
}

export default MoodEventsRepository
