import axios from 'axios'

export async function getCareRecipient(id: string) {
  return axios.get(`/care-recipients/${id}`)
}
