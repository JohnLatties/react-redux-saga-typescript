import { RowDataPacket } from 'mysql2'
import { connection } from '../../helper/SQLConnectHelper'
import { CareRecipient } from '../mapping/CareRecipient'


export interface ICareRecipientRepository {
  getById(careRecipientId: string) : Promise<CareRecipient | null>
}


async function getById(careRecipientId: string) {
  const query = `
    SELECT 
      careRecipient.care_recipient_id as id 
    FROM (SELECT DISTINCT care_recipient_id from events) as careRecipient
    WHERE  careRecipient.care_recipient_id = ?
    LIMIT 1
  `
  const [rows] = await connection.promise().query(query, [careRecipientId])
  const rowResult = <RowDataPacket[]> rows
  return rowResult[0] as CareRecipient
}

function CareRecipientRepository (): ICareRecipientRepository  {
  return {
    getById
  }
}

export default CareRecipientRepository
