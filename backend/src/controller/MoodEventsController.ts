import { HttpRequest, notFound, ok, serverError } from './base/Http'
import MoodEventsRepository from '../infra/data/repository/MoodEventsRepository'

function MainObservationsController() {
  return {
    handle: async function (httpRequest: HttpRequest) {
    try {
      const { id } = httpRequest.params || {}
      const result = await MoodEventsRepository().byCareRecipientId(id)
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