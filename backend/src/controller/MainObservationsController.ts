import { HttpRequest, notFound, ok, serverError } from './base/Http'
import MainObservationRepository from '../infra/data/repository/MainObservationRepository'

function MainObservationsController() {
  return {
    handle: async function (httpRequest: HttpRequest) {
    try {
      const { id } = httpRequest.params || {}
      const result = await MainObservationRepository().byCareRecipientId(id)
      if(!result) return notFound(new Error('id not found'))
      return ok(result)
    } catch (error) {
      console.log('error', error)
      return serverError(new Error('Internal error'))
      } 
    }
  }
}

export default MainObservationsController