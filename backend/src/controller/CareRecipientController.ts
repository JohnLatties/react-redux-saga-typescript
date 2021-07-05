import { HttpRequest, notFound, ok, serverError } from './base/Http'
import CareRecipientRepository from '../infra/data/repository/CareRecipientRepository'

function CareRecipientController() {
  return {
    handle: async function (httpRequest: HttpRequest) {
    try {
      const { id } = httpRequest.params || {}
      const result = await CareRecipientRepository().getById(id)
      if(!result) return notFound(new Error('id not found'))
      return ok(result)
    } catch (error) {
      return serverError(new Error('Internal error'))
      } 
    }
  }
}

export default CareRecipientController