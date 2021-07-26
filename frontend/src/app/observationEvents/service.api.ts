import axios from 'axios'

export async function getLastConcern(id: string) {
  return axios.get(`/care-recipients/${id}/last-concern`)
}

export async function getObservationEvents(
  id: string,
  perPage: number,
  page: number
) {
  return axios.get(
    `/care-recipients/${id}/events?perPage=${perPage}&page=${page}`
  )
}
