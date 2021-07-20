import { RowDataPacket } from 'mysql2'
import { connection } from '../../helper/SQLConnectHelper'
import { MoodEvent } from '../mapping/MoodEvents'


export interface IMoodEventsRepository {
  byCareRecipientId(careRecipientId: string) : Promise<MoodEvent[] | null>
}


async function byCareRecipientId(careRecipientId: string) {
  const query = `
    SELECT payload->'$.mood' as mood, count(*) as total
    FROM events
    WHERE payload->'$.care_recipient_id' = ?
    AND payload->'$.event_type' = 'mood_observation'
    GROUP BY mood 
  `
  const [rows] = await connection.promise().query(query, [careRecipientId])
  const rowResult = <RowDataPacket[]> rows

  if(!rowResult.length) return null

  return rowResult as MoodEvent[]
}

function MoodEventsRepository (): IMoodEventsRepository  {
  return {
    byCareRecipientId
  }
}

export default MoodEventsRepository
