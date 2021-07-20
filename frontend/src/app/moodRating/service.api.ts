import axios from 'axios'

export async function getMoodEvents(id: string) {
  return axios.get(`/care-recipients/${id}/mood-events`)
}
