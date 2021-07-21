import { HttpRequest, notFound, ok, serverError } from './base/Http'
import EventsRepository from '../infra/data/repository/EventsRepository'

function MainObservationsController() {
  return {
    handle: async function (httpRequest: HttpRequest) {
    try {
      const { id } = httpRequest.params || {}
      const result = await EventsRepository().lastConcernRaised(id)
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