import axios from 'axios'

export async function getLastConcern(id: string) {
  return axios.get(`/care-recipients/${id}/last-concern`)
}
