import axios from 'axios'

export async function getMainObservations(id: string) {
  return axios.get(`/care-recipients/${id}/main-observations`)
}
