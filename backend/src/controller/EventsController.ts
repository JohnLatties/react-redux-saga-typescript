import { HttpRequest, notFound, ok, serverError } from './base/Http'
import EventsRepository from '../infra/data/repository/EventsRepository'

function EventsController() {
  return {
    handle: async function (httpRequest: HttpRequest) {
    try {
      const { id } = httpRequest.params || {}
      const { perPage, page } = getHttpQuery(httpRequest)
      const result = await EventsRepository().getEvents(id, perPage, page)
      if(!result) return notFound(new Error('id not found'))
      return ok(result)
    } catch (error) {
      console.log('error', error)
      return serverError(new Error('Internal error'))
      } 
    }
  }
}

function getHttpQuery (req: HttpRequest) {
  const params = req.query || {}
  const pageDefault = 1
  const perPageDefault = 10

  const page = parseInt(params.page)
  const perPage = parseInt(params.perPage)

  return {
    page: page || pageDefault,
    perPage: perPage || perPageDefault
  }
}

export default EventsController