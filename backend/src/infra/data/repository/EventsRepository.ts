import { RowDataPacket } from 'mysql2'
import { connection } from '../../helper/SQLConnectHelper'
import { ConcernEvent } from '../mapping/ConcernEvent'


export interface EventsRepository {
  lastConcernRaised(careRecipientId: string) : Promise<ConcernEvent | null>
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

function MoodEventsRepository (): EventsRepository  {
  return {
    lastConcernRaised
  }
}

export default MoodEventsRepository
